"use client"; // Marks this component as a Client Component

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashboardPage() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div>
        <h1>Dashboard</h1>
        <Calendar onChange={setDate} value={date} />
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    );
  }