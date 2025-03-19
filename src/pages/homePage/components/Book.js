import Calendar from "react-calendar";
import React, { createElement, useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const SCOPES = process.env.SCOPES;
const CLIENT_ID = process.env.CLIENT_ID;


export const Book = () => {
  const [timeslots] = useState([
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]);
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [confirmation, setConfirmation] = useState("");
  const [tokenClient, setTokenClient] = useState(null);
  const [accessToken, setAccessToken] = useState(null);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "accounts.google.com/gsi/client";
    script.type = "text/babel";
    script.async = true;
    script.defer = true;
    script.onload = () => {
        console.log("GIS script loaded.");
      if (
        window.google &&
        window.google.accounts &&
        window.google.accounts.oauth2
      ) {
        console.log("google.accounts.oauth2 is available.");
        // Initialize the OAuth token client.
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          // The callback will be invoked once an access token is returned.
          callback: (response) => {
            console.log('response is '+ response)
            if (response.error) {
              console.error("Error getting access token:", response);
              return;
            }
            setAccessToken(response.access_token);
            console.log("Access token received:", response.access_token);
          },
        });
        setTokenClient(client);
        console.log("Token client created:", client);
      } else {
        console.error("Google Identity Services failed to load.");
      }
    };
    script.onerror = () => {
        console.error("Error loading GIS script.");
      };
    document.body.appendChild(script);
  }, []);

  const handleDateChange = (date) => {
    console.log("called handle date change");
    setSelectedDate(date);
    setSelectedTimeslot("");
  };

  const handleTimeslotSelected = (timeslot) => {
    console.log("called handleTimeslotSelected");
    setSelectedTimeslot(timeslot);
  };

  const handleBooking = async () => {
    console.log("called handleBooking");
    if (selectedDate.getDay() !== 5) {
      alert(
        "Consultation calls are only available on Fridays. Please select a Friday."
      );
      return;
    }
    if (!selectedTimeslot) {
      alert("Please select a timeslot!");
      return;
    }

    if (!accessToken && tokenClient) {
      // The prompt parameter forces the consent screen to appear.
      tokenClient.requestAccessToken({ prompt: "consent" });
      return;
    }


    const [time, modifier] = selectedTimeslot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    const eventStart = new Date(selectedDate);
    eventStart.setHours(hours);
    eventStart.setMinutes(minutes);
    eventStart.setSeconds(0);

    const eventEnd = new Date(eventStart.getTime() + 30 * 60 * 1000);

    const event = {
      summary: "Consultation Call with With Grace Counselling LLC",
      location: "Online",
      description: "Consultation Call booked via website.",
      start: {
        dateTime: eventStart.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: eventEnd.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    // Create the event using the Google Calendar API.
    console.log("Using access token:", accessToken);
    fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => {
        console.log('.then res is '+ res.json())
        if (!res.ok) {
            return res.text().then((text) => {
                console.error("Calendar API error response:", text);
                throw new Error("Error creating event");
              });
            }
            return res.json();
      })
      .then((data) => {
        console.log("Event created:", data);
        setConfirmation(
          `Your consultation is booked on ${eventStart.toLocaleString()}`
        );
      })
      .catch((error) => {
        console.error("Error booking event:", error);
        alert("There was an error booking your event. Please try again.");
      });
  };
  return (
    <div style={{ padding: "2rem" }}>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h3>Available Timeslots</h3>
      <div>
        {timeslots.map((timeslot, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`${timeslot} clicked`);
              handleTimeslotSelected(timeslot);
            }}
            style={{
              margin: "5px",
              padding: "0.5rem 1rem",
              backgroundColor: selectedTimeslot === timeslot ? "lightblue" : "",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {timeslot}
          </button>
        ))}
      </div>
      <button
        onClick={handleBooking}
        // disabled={!gapiLoaded}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Book Now
      </button>
      {confirmation && <p style={{ marginTop: "1rem" }}>{confirmation}</p>}
      <ToastContainer />
    </div>
  );
};
