export const getOrganizerEmailTemplate = (
  name: string,
  email: string,
  topic: string,
  startTime: string,
  duration: string,
  agenda: string,
  joinUrl: string,
  password: string
) => {
  const meetingDate = new Date(startTime).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const meetingTime = new Date(startTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Meeting Request</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #eaeaea;
          background-color: #f0f9ff;
          border-radius: 8px 8px 0 0;
        }
        .logo {
          width: 120px;
          height: auto;
          margin-bottom: 10px;
        }
        h1 {
          color: #0066cc;
          margin: 0;
          font-size: 24px;
        }
        h2 {
          color: #0066cc;
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .content {
          padding: 20px;
        }
        .meeting-info {
          background-color: #f8fafc;
          border-radius: 6px;
          padding: 15px;
          margin: 20px 0;
          border-left: 4px solid #0066cc;
        }
        .meeting-detail {
          margin-bottom: 10px;
        }
        .meeting-detail strong {
          display: inline-block;
          min-width: 120px;
          color: #4b5563;
        }
        .meeting-link {
          background-color: #e6f7ff;
          border-radius: 6px;
          padding: 15px;
          margin: 20px 0;
          word-break: break-all;
        }
        .button {
          display: inline-block;
          background-color: #0066cc;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 15px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 12px;
          border-top: 1px solid #eaeaea;
        }
        .highlight {
          color: #0066cc;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Meeting Request</h1>
        </div>
        <div class="content">
          <p>Hello Naveen,</p>
          <p>You have received a new meeting request with the following details:</p>
          
          <div class="meeting-info">
            <div class="meeting-detail"><strong>Client:</strong> ${name} (${email})</div>
            <div class="meeting-detail"><strong>Topic:</strong> ${topic}</div>
            <div class="meeting-detail"><strong>Date:</strong> ${meetingDate}</div>
            <div class="meeting-detail"><strong>Time:</strong> ${meetingTime}</div>
            <div class="meeting-detail"><strong>Duration:</strong> ${duration} minutes</div>
            ${
              agenda
                ? `<div class="meeting-detail"><strong>Agenda:</strong> ${agenda}</div>`
                : ""
            }
          </div>
          
          <h2>Meeting Link</h2>
          <div class="meeting-link">
            <p>Join URL: <a href="${joinUrl}" target="_blank">${joinUrl}</a></p>
            ${
              password
                ? `<p>Password: <span class="highlight">${password}</span></p>`
                : ""
            }
          </div>
          
          <p>You can add this meeting to your calendar and join at the scheduled time.</p>
          <a href="${joinUrl}" class="button" target="_blank">Join Meeting</a>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Kandula Naveen. All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getClientEmailTemplate = (
  name: string,
  topic: string,
  startTime: string,
  duration: string,
  agenda: string,
  joinUrl: string,
  password: string
) => {
  const meetingDate = new Date(startTime).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const meetingTime = new Date(startTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Meeting with Kandula Naveen</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .profile-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }
        h1 {
          color: #2563eb;
          margin: 0;
          font-size: 24px;
        }
        .subtitle {
          color: #6b7280;
          margin-top: 5px;
        }
        .content {
          padding: 20px 0;
        }
        .meeting-details {
          background-color: #f0f7ff;
          border-radius: 6px;
          padding: 15px;
          margin: 20px 0;
          border-left: 4px solid #2563eb;
        }
        .meeting-details h3 {
          margin-top: 0;
          color: #2563eb;
        }
        .meeting-item {
          margin-bottom: 10px;
        }
        .meeting-item strong {
          display: inline-block;
          width: 100px;
        }
        .join-button {
          display: inline-block;
          background-color: #2563eb;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          margin: 20px 0;
          border-radius: 4px;
          font-weight: 500;
          text-align: center;
        }
        .note {
          background-color: #fffbeb;
          border-left: 4px solid #f59e0b;
          padding: 10px 15px;
          margin-top: 20px;
          border-radius: 4px;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #eaeaea;
          font-size: 12px;
          color: #666;
        }
        .social-links {
          margin-top: 15px;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #2563eb;
          text-decoration: none;
        }
        .calendar-buttons {
          display: flex;
          justify-content: center;
          margin-top: 15px;
          gap: 10px;
        }
        .calendar-button {
          display: inline-block;
          background-color: #f3f4f6;
          color: #374151;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
            border-radius: 0;
          }
          .calendar-buttons {
            flex-direction: column;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://i.imgur.com/6z8PwWy.png" alt="Kandula Naveen" class="profile-image">
          <h1>Your Meeting is Scheduled!</h1>
          <p class="subtitle">With Kandula Naveen, Full Stack Developer</p>
        </div>
        <div class="content">
          <p>Hello ${name},</p>
          <p>Thank you for scheduling a meeting with me. I'm looking forward to our conversation!</p>
          
          <div class="meeting-details">
            <h3>Meeting Details</h3>
            <div class="meeting-item">
              <strong>Topic:</strong> ${topic}
            </div>
            <div class="meeting-item">
              <strong>Date:</strong> ${meetingDate}
            </div>
            <div class="meeting-item">
              <strong>Time:</strong> ${meetingTime}
            </div>
            <div class="meeting-item">
              <strong>Duration:</strong> ${duration} minutes
            </div>
            <div class="meeting-item">
              <strong>Password:</strong> ${password}
            </div>
            ${
              agenda
                ? `<div class="meeting-item">
              <strong>Agenda:</strong> ${agenda}
            </div>`
                : ""
            }
          </div>

          <p style="text-align: center;">
            <a href="${joinUrl}" class="join-button">Join Zoom Meeting</a>
          </p>
          
          <div class="calendar-buttons">
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
              topic
            )}&dates=${encodeURIComponent(
    startTime.replace(/[-:]/g, "").replace(".000Z", "Z")
  )}&details=${encodeURIComponent(
    `Meeting with Kandula Naveen\n\nJoin URL: ${joinUrl}\nPassword: ${password}${
      agenda ? `\n\nAgenda: ${agenda}` : ""
    }`
  )}" target="_blank" class="calendar-button">Add to Google Calendar</a>
            <a href="https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
              topic
            )}&body=${encodeURIComponent(
    `Meeting with Kandula Naveen\n\nJoin URL: ${joinUrl}\nPassword: ${password}${
      agenda ? `\n\nAgenda: ${agenda}` : ""
    }`
  )}&startdt=${encodeURIComponent(startTime)}&enddt=${encodeURIComponent(
    new Date(
      new Date(startTime).getTime() + parseInt(duration) * 60000
    ).toISOString()
  )}" target="_blank" class="calendar-button">Add to Outlook</a>
          </div>
          
          <div class="note">
            <p><strong>Note:</strong> Please ensure you have the Zoom application installed or join through your browser. It's recommended to join the meeting a few minutes early to check your audio and video settings.</p>
          </div>
          
          <p>If you need to reschedule or have any questions before our meeting, please reply to this email or contact me directly.</p>
          <p>I look forward to speaking with you!</p>
          <p>Best regards,<br>Kandula Naveen</p>
        </div>
        <div class="footer">
          <p>Full Stack Developer | AI-Driven Solutions Architect</p>
          <div class="social-links">
            <a href="https://github.com/Kandulanaveennaidu" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/kandulanaveen1/" target="_blank">LinkedIn</a>
            <a href="https://kandulanaveennaidu.github.io/Naveen-Kandula-Portfolio/" target="_blank">Portfolio</a>
          </div>
          <p>&copy; ${new Date().getFullYear()} Kandula Naveen. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
