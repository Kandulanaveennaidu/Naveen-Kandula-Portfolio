import axios from "axios";
import jwt from "jsonwebtoken";

// Function to generate a Zoom JWT token
export const generateZoomJWT = () => {
  const payload = {
    iss: process.env.ZOOM_CLIENT_ID,
    exp: new Date().getTime() + 5000,
  };

  return jwt.sign(payload, process.env.ZOOM_CLIENT_SECRET || "");
};

// Function to get Zoom OAuth token
export const getZoomOAuthToken = async () => {
  try {
    const response = await axios.post("https://zoom.us/oauth/token", null, {
      params: {
        grant_type: "account_credentials",
        account_id: process.env.ZOOM_ACCOUNT_ID,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting Zoom OAuth token:", error);
    throw new Error("Failed to get Zoom OAuth token");
  }
};

// Create a Zoom meeting
export const createZoomMeeting = async (
  topic: string,
  startTime: string, // ISO format: 2023-08-30T14:00:00Z
  duration: number, // in minutes
  timezone: string = "UTC",
  agenda: string = ""
) => {
  try {
    const token = await getZoomOAuthToken();

    const response = await axios.post(
      `${process.env.ZOOM_BASE_URL}users/me/meetings`,
      {
        topic,
        type: 2, // Scheduled meeting
        start_time: startTime,
        duration,
        timezone,
        agenda,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          waiting_room: true,
          auto_recording: "none",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Zoom meeting:", error);
    throw new Error("Failed to create Zoom meeting");
  }
};

// Get user's scheduled meetings
export const getScheduledMeetings = async () => {
  try {
    const token = await getZoomOAuthToken();

    const response = await axios.get(
      `${process.env.ZOOM_BASE_URL}users/me/meetings?type=scheduled`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching scheduled meetings:", error);
    throw new Error("Failed to fetch scheduled meetings");
  }
};
