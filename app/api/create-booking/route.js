import { google } from "googleapis";

export async function POST(req) {
  const { name, email, startDate, endDate } = await req.json();

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: req.headers.get("Authorization") });

    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: `Booking for ${name}`,
      description: `Booked by ${name} (${email})`,
      start: {
        dateTime: startDate,
        timeZone: "UTC",
      },
      end: {
        dateTime: endDate,
        timeZone: "UTC",
      },
      attendees: [{ email }],
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendUpdates: "all",
    });

    return new Response(JSON.stringify({ eventId: response.data.id }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create event" }), {
      status: 500,
    });
  }
}
