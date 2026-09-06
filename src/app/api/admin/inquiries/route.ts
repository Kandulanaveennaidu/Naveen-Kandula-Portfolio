import { NextRequest, NextResponse } from "next/server";
import { getInquiries, updateInquiryStatus } from "@/lib/db";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  const adminKey = process.env.ADMIN_ACCESS_KEY || "naveen_admin_secure_2026";
  
  if (authHeader && authHeader === `Bearer ${adminKey}`) {
    return true;
  }
  
  // Also check cookie for browser session
  const cookieKey = request.cookies.get("admin_token")?.value;
  if (cookieKey && cookieKey === adminKey) {
    return true;
  }

  return false;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "all";
    const inquiries = await getInquiries(status);
    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "ID and status are required." }, { status: 400 });
    }

    const success = await updateInquiryStatus(id, status);
    if (success) {
      return NextResponse.json({ success: true, message: `Status updated to ${status}` }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Inquiry not found." }, { status: 404 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
