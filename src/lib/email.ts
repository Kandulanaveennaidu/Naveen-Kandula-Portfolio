import nodemailer from "nodemailer";
import type { ContactInquiry } from "./db";

export interface EmailResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

export async function sendInquiryNotification(inquiry: ContactInquiry): Promise<EmailResult> {
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "kandulanaveennaidu017@gmail.com";
  const subject = `New Freelance Project Inquiry — ${inquiry.project_type}`;

  const emailBodyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #08090B; color: #F5F7FA; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
      <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="margin: 0; color: #7C5CFF; font-size: 20px;">⚡ New Freelance Project Inquiry</h2>
        <p style="margin: 4px 0 0 0; color: #A7AFBD; font-size: 13px;">Received via portfolio lead generation system</p>
      </div>

      <div style="background-color: #12151A; padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 20px;">
        <table style="width: 100%; font-size: 14px; line-height: 1.6; border-collapse: collapse;">
          <tr>
            <td style="color: #737B89; padding: 6px 0; width: 140px;">Client Name:</td>
            <td style="color: #F5F7FA; font-weight: bold; padding: 6px 0;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Email:</td>
            <td style="color: #22D3EE; padding: 6px 0;"><a href="mailto:${inquiry.email}" style="color: #22D3EE; text-decoration: none;">${inquiry.email}</a></td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Company:</td>
            <td style="color: #F5F7FA; padding: 6px 0;">${inquiry.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Phone / WhatsApp:</td>
            <td style="color: #F5F7FA; padding: 6px 0;">${inquiry.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Project Type:</td>
            <td style="color: #7C5CFF; font-weight: bold; padding: 6px 0;">${inquiry.project_type}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Budget Range:</td>
            <td style="color: #F5F7FA; padding: 6px 0;">${inquiry.budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Timeline:</td>
            <td style="color: #F5F7FA; padding: 6px 0;">${inquiry.timeline || "Flexible"}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Preferred Contact:</td>
            <td style="color: #22C55E; font-weight: bold; padding: 6px 0;">${inquiry.preferred_contact}</td>
          </tr>
          <tr>
            <td style="color: #737B89; padding: 6px 0;">Submitted Time:</td>
            <td style="color: #A7AFBD; padding: 6px 0;">${inquiry.created_at}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #171A21; padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 24px;">
        <h4 style="margin: 0 0 8px 0; color: #F5F7FA; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Brief & Requirements:</h4>
        <p style="margin: 0; color: #F5F7FA; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${inquiry.message}</p>
      </div>

      <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #737B89;">
        <p style="margin: 0;">Inquiry ID: ${inquiry.id} • Stored in PostgreSQL</p>
      </div>
    </div>
  `;

  // Check if Resend API key is available
  if (process.env.RESEND_API_KEY) {
    try {
      const apiKey = process.env.RESEND_API_KEY.trim().replace(/^["']|["']$/g, "");
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "Naveen Portfolio <onboarding@resend.dev>",
          to: [recipient],
          subject,
          html: emailBodyHtml,
          reply_to: inquiry.email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("[EMAIL] Resend notification sent successfully:", data.id);
        return { sent: true, messageId: data.id };
      } else {
        console.warn("[EMAIL] Resend returned error:", data);
        return { sent: false, error: JSON.stringify(data) };
      }
    } catch (err: any) {
      console.error("[EMAIL] Failed to dispatch via Resend:", err);
      return { sent: false, error: err.message };
    }
  }

  // Check if standard SMTP configuration is present
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: recipient,
        replyTo: inquiry.email,
        subject,
        html: emailBodyHtml,
      });

      console.log("[EMAIL] SMTP notification sent successfully:", info.messageId);
      return { sent: true, messageId: info.messageId };
    } catch (err: any) {
      console.error("[EMAIL] SMTP delivery failed:", err);
      return { sent: false, error: err.message };
    }
  }

  // Development/Fallback mode: log preview
  console.log(`[EMAIL NOTICE] No transactional email provider configured. Notification simulated for ${recipient}.`);
  console.log(`[EMAIL PREVIEW] Subject: ${subject}`);
  return { sent: true, messageId: "simulated_local_dev" };
}
