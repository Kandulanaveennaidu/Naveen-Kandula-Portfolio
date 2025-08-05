import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const hostFrom = process.env.EMAIL_FROM!;
    const organizerEmail = process.env.EMAIL_USER!;

    // Email to organizer
    const organizerMailOptions = {
      from: hostFrom,
      to: organizerEmail,
      subject: `✉️ New Contact Form Submission from ${name}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #2d3748; 
            background-color: #f7fafc; 
          }
          .email-wrapper { 
            width: 100%; 
            padding: 40px 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
          }
          .header { 
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); 
            color: #ffffff; 
            padding: 40px 30px; 
            text-align: center; 
            position: relative; 
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          .header h1 { 
            font-size: 28px; 
            font-weight: 700; 
            margin-bottom: 8px; 
            position: relative; 
            z-index: 1; 
          }
          .header p { 
            font-size: 16px; 
            opacity: 0.9; 
            position: relative; 
            z-index: 1; 
          }
          .content { 
            padding: 40px 30px; 
            background: #ffffff; 
          }
          .notification-badge {
            display: inline-block;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 24px;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          .info-card {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
            border-left: 6px solid #4f46e5;
          }
          .info-row {
            display: flex;
            margin-bottom: 16px;
            align-items: flex-start;
          }
          .info-row:last-child { margin-bottom: 0; }
          .info-label {
            font-weight: 700;
            color: #374151;
            min-width: 80px;
            margin-right: 16px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .info-value {
            color: #4b5563;
            font-size: 15px;
            flex: 1;
            line-height: 1.5;
          }
          .message-box {
            background: linear-gradient(135deg, #fef7ff 0%, #faf5ff 100%);
            border: 2px solid #e9d5ff;
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            position: relative;
          }
          .message-box::before {
            content: '💬';
            position: absolute;
            top: -10px;
            left: 20px;
            background: #7c3aed;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }
          .message-text {
            color: #5b21b6;
            font-size: 15px;
            line-height: 1.6;
            margin-top: 8px;
          }
          .cta-section {
            text-align: center;
            margin-top: 32px;
            padding-top: 24px;
            border-top: 2px solid #e5e7eb;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: white;
            padding: 14px 28px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
            transition: transform 0.2s ease;
          }
          .footer { 
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%); 
            color: #d1d5db; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px; 
          }
          .footer-divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            margin: 0 auto 16px;
            border-radius: 2px;
          }
          @media (max-width: 600px) {
            .email-wrapper { padding: 20px 10px; }
            .header, .content { padding: 30px 20px; }
            .info-row { flex-direction: column; }
            .info-label { margin-bottom: 4px; }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Message</h1>
              <p>You have received a new message from your portfolio</p>
            </div>
            <div class="content">
              <div class="notification-badge">🔔 New Submission</div>
              
              <div class="info-card">
                <div class="info-row">
                  <div class="info-label">👤 Name:</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">📧 Email:</div>
                  <div class="info-value"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">📅 Date:</div>
                  <div class="info-value">${new Date().toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}</div>
                </div>
              </div>

              <div class="message-box">
                <div class="info-label">Message Content:</div>
                <div class="message-text">${message.replace(
                  /\n/g,
                  "<br/>"
                )}</div>
              </div>

              <div class="cta-section">
                <a href="mailto:${email}?subject=Re: Your message from portfolio" class="cta-button">
                  📧 Reply to ${name}
                </a>
              </div>
            </div>
            <div class="footer">
              <div class="footer-divider"></div>
              <p><strong>Portfolio Contact System</strong></p>
              <p>This email was automatically generated from your portfolio contact form</p>
              <p style="margin-top: 8px; font-size: 12px; opacity: 0.8;">
                © ${new Date().getFullYear()} Naveen Kandula Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    // Email to user
    const userMailOptions = {
      from: hostFrom,
      to: email,
      subject: "🎉 Thank You for Reaching Out!",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #2d3748; 
            background-color: #f7fafc; 
          }
          .email-wrapper { 
            width: 100%; 
            padding: 40px 20px; 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%); 
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
          }
          .header { 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%); 
            color: #ffffff; 
            padding: 40px 30px; 
            text-align: center; 
            position: relative; 
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          .header h1 { 
            font-size: 32px; 
            font-weight: 700; 
            margin-bottom: 12px; 
            position: relative; 
            z-index: 1; 
          }
          .header p { 
            font-size: 18px; 
            opacity: 0.95; 
            position: relative; 
            z-index: 1; 
            font-weight: 300; 
          }
          .content { 
            padding: 40px 30px; 
            background: #ffffff; 
          }
          .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 20px;
          }
          .main-message {
            font-size: 16px;
            color: #4b5563;
            line-height: 1.7;
            margin-bottom: 32px;
          }
          .success-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #dcfdf7 0%, #a7f3d0 100%);
            color: #065f46;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 28px;
            border: 2px solid #6ee7b7;
          }
          .message-summary {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 2px solid #bae6fd;
            border-radius: 12px;
            padding: 24px;
            margin: 24px 0;
            border-left: 6px solid #0ea5e9;
            position: relative;
          }
          .message-summary::before {
            content: '📝';
            position: absolute;
            top: -12px;
            left: 20px;
            background: #0ea5e9;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
          }
          .summary-title {
            font-weight: 700;
            color: #0c4a6e;
            margin-bottom: 12px;
            font-size: 16px;
            margin-top: 8px;
          }
          .summary-content {
            color: #0369a1;
            font-size: 15px;
            line-height: 1.6;
            background: rgba(255, 255, 255, 0.8);
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #bae6fd;
          }
          .response-timeline {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            text-align: center;
          }
          .timeline-icon {
            font-size: 32px;
            margin-bottom: 12px;
          }
          .timeline-text {
            color: #92400e;
            font-weight: 600;
            font-size: 16px;
          }
          .timeline-subtext {
            color: #b45309;
            font-size: 14px;
            margin-top: 4px;
          }
          .contact-info {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            border-radius: 12px;
            padding: 24px;
            margin-top: 32px;
            text-align: center;
          }
          .contact-title {
            font-weight: 700;
            color: #374151;
            margin-bottom: 16px;
            font-size: 18px;
          }
          .contact-details {
            display: flex;
            justify-content: center;
            gap: 32px;
            flex-wrap: wrap;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #6b7280;
            font-size: 14px;
          }
          .social-links {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            gap: 16px;
          }
          .social-link {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            font-size: 18px;
            transition: transform 0.2s ease;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
          }
          .footer { 
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%); 
            color: #d1d5db; 
            padding: 32px 30px; 
            text-align: center; 
          }
          .footer-divider {
            width: 80px;
            height: 3px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            margin: 0 auto 20px;
            border-radius: 2px;
          }
          .footer-brand {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: #f9fafb;
          }
          .footer-tagline {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 16px;
          }
          .footer-copyright {
            font-size: 12px;
            opacity: 0.6;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 16px;
            margin-top: 16px;
          }
          @media (max-width: 600px) {
            .email-wrapper { padding: 20px 10px; }
            .header, .content { padding: 30px 20px; }
            .contact-details { flex-direction: column; gap: 16px; }
            .social-links { gap: 12px; }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="container">
            <div class="header">
              <h1>🎉 Message Received!</h1>
              <p>Thank you for reaching out through my portfolio</p>
            </div>
            <div class="content">
              <div class="success-badge">
                ✅ Message Successfully Delivered
              </div>
              
              <div class="greeting">Hi ${name}! 👋</div>
              
              <div class="main-message">
                Thank you for taking the time to reach out through my portfolio contact form. 
                I really appreciate your interest and I'm excited to connect with you. Your message 
                has been successfully received and I'll make sure to get back to you as soon as possible.
              </div>

              <div class="message-summary">
                <div class="summary-title">Your Message Summary:</div>
                <div class="summary-content">${message.replace(
                  /\n/g,
                  "<br/>"
                )}</div>
              </div>

              <div class="response-timeline">
                <div class="timeline-icon">⏰</div>
                <div class="timeline-text">Expected Response Time</div>
                <div class="timeline-subtext">I typically respond within 24-48 hours</div>
              </div>

              <div class="contact-info">
                <div class="contact-title">📞 Get in Touch</div>
                <div class="contact-details">
                  <div class="contact-item">
                    <span>📧</span>
                    <span>${
                      process.env.CONTACT_EMAIL ||
                      "kandulanaveennaidu017@gmail.com"
                    }</span>
                  </div>
                  <div class="contact-item">
                    <span>📱</span>
                    <span>${process.env.CONTACT_PHONE || "+919705627977"}</span>
                  </div>
                </div>
                <div class="social-links">
                  <a href="#" class="social-link">💼</a>
                  <a href="#" class="social-link">🔗</a>
                  <a href="#" class="social-link">📧</a>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="footer-divider"></div>
              <div class="footer-brand">Naveen Kandula</div>
              <div class="footer-tagline">Full Stack Developer & Portfolio</div>
              <div class="footer-copyright">
                © ${new Date().getFullYear()} Naveen Kandula Portfolio. All rights reserved.<br/>
                This is an automated response from the portfolio contact system.
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    // Send emails
    await transporter.sendMail(organizerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
