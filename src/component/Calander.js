import React from "react";
import "./Calander.scss";

const days = Array.from({ length: 30 }, (_, i) => i + 1);

export default function Calander() {
  return (
    <div className="calander-dates">
      {days.map((day) => (
        <div className="calander-date" key={day}>
          <p>{day}</p>
        </div>
      ))}
    </div>
  );
}
