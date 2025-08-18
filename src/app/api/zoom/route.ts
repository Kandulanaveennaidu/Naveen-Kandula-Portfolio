import { NextRequest, NextResponse } from "next/server";
import { createZoomMeeting } from "@/lib/zoom/zoom-service";
import {
  sendClientMeetingEmail,
  sendOrganizerMeetingEmail,
} from "@/lib/email-service";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { topic, startTime, duration, timezone, agenda, name, email } = body;

    // Validate request data
    if (!topic || !startTime || !duration || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the meeting
    const meeting = await createZoomMeeting(
      topic,
      startTime,
      duration,
      timezone || "UTC",
      agenda || `Meeting with ${name} (${email})`
    );

    // Send email notifications
    try {
      // Send email to the client
      await sendClientMeetingEmail(
        name,
        email,
        topic,
        startTime,
        duration.toString(),
        agenda || "",
        meeting.join_url,
        meeting.password || ""
      );

      // Send email to the organizer (you)
      await sendOrganizerMeetingEmail(
        name,
        email,
        topic,
        startTime,
        duration.toString(),
        agenda || "",
        meeting.join_url,
        meeting.password || ""
      );
    } catch (emailError) {
      console.error("Error sending email notifications:", emailError);
      // Continue with the response even if email sending fails
    }

    // Return the meeting details
    return NextResponse.json({
      success: true,
      meeting: {
        id: meeting.id,
        join_url: meeting.join_url,
        password: meeting.password,
        topic: meeting.topic,
        start_time: meeting.start_time,
        duration: meeting.duration,
        emailsSent: true,
      },
    });
  } catch (error) {
    console.error("Error creating Zoom meeting:", error);
    return NextResponse.json(
      { error: "Failed to create Zoom meeting" },
      { status: 500 }
    );
  }
}
