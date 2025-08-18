import nodemailer from "nodemailer";
import {
  getOrganizerEmailTemplate,
  getClientEmailTemplate,
} from "./email-templates/zoom-meeting-templates";

// Configure email transporter
const configureTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // For port 587, secure should be false
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });
};

// Send meeting confirmation email to the client
export const sendClientMeetingEmail = async (
  name: string,
  email: string,
  topic: string,
  startTime: string,
  duration: string,
  agenda: string,
  joinUrl: string,
  password: string
) => {
  try {
    const transporter = configureTransporter();
    const emailContent = getClientEmailTemplate(
      name,
      topic,
      startTime,
      duration,
      agenda,
      joinUrl,
      password
    );

    await transporter.sendMail({
      from: `"Kandula Naveen" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Meeting Scheduled: ${topic}`,
      html: emailContent,
    });

    return true;
  } catch (error) {
    console.error("Error sending client email:", error);
    return false;
  }
};

// Send meeting notification email to the organizer
export const sendOrganizerMeetingEmail = async (
  name: string,
  email: string,
  topic: string,
  startTime: string,
  duration: string,
  agenda: string,
  joinUrl: string,
  password: string
) => {
  try {
    const transporter = configureTransporter();
    const emailContent = getOrganizerEmailTemplate(
      name,
      email,
      topic,
      startTime,
      duration,
      agenda,
      joinUrl,
      password
    );

    await transporter.sendMail({
      from: `"Meeting Scheduler" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `New Meeting Request: ${topic} with ${name}`,
      html: emailContent,
    });

    return true;
  } catch (error) {
    console.error("Error sending organizer email:", error);
    return false;
  }
};
