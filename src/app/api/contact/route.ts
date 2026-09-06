import { NextRequest, NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db";
import { sendInquiryNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

// Basic in-memory rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) {
    return false;
  }
  entry.count += 1;
  return true;
}

function sanitize(input: string | undefined): string {
  if (!input) return "";
  return input
    .trim()
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .slice(0, 5000); // Limit maximum length
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries submitted from this connection. Please try again in a few minutes or message via WhatsApp directly." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      preferredContact, 
      message, 
      honeypot 
    } = body;

    // Spam honeypot trap: bots filling hidden field are quietly discarded
    if (honeypot) {
      console.warn("[SPAM BLOCKED] Honeypot field was filled.");
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Required field validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Full name, email, project type, and project brief are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Sanitize values
    const cleanRecord = {
      name: sanitize(name),
      email: sanitize(email).toLowerCase(),
      company: sanitize(company),
      phone: sanitize(phone),
      project_type: sanitize(projectType),
      budget: sanitize(budget),
      timeline: sanitize(timeline),
      preferred_contact: sanitize(preferredContact || "Email"),
      message: sanitize(message),
      source: "freelance_lead_system",
    };

    // 1. Persist lead in PostgreSQL (or local fallback)
    const savedInquiry = await saveInquiry(cleanRecord);

    // 2. Trigger asynchronous email notification (non-blocking for UI)
    try {
      await sendInquiryNotification(savedInquiry);
    } catch (emailErr) {
      console.error("[EMAIL DISPATCH WARNING]", emailErr);
      // We do not fail the request if the email notification failed because the lead is already saved in DB!
    }

    return NextResponse.json(
      {
        success: true,
        inquiryId: savedInquiry.id,
        message: "Your project inquiry has been received and saved. Naveen will review your requirements and reach out within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "A server error occurred while saving your inquiry. Please reach out directly at kandulanaveennaidu017@gmail.com or WhatsApp." },
      { status: 500 }
    );
  }
}
