import React from "react";
const days = Array.from({ length: 30 }, (_, i) => i + 1);

export default function Calander() {
  return (
    <div>
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
