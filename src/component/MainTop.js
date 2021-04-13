import React, { useState } from "react";
import "./MainTop.scss";
const times = ["Day", "week", "Month"];
export default function MainTop() {
  const [toggleButton, settoggleButton] = useState("Day");

  const onNextClick = () => {
    const index = times.findIndex((t) => t === toggleButton);
    if (index > times.length - 1 || index + 1 > times.length - 1)
      return settoggleButton(times[0]);
    else settoggleButton(times[index + 1]);
  };
  const onPervClick = () => {
    const index = times.findIndex((t) => t === toggleButton);
    if (index < 0 || index - 1 < 0)
      return settoggleButton(times[times.length - 1]);
    else settoggleButton(times[index - 1]);
  };

  return (
    <div className="main-top">
      <div className="top-first-row">
        <h3>November 2019</h3>
        <div className="grid">
          <p className="bold">Today</p>
          <small>18 , Mon</small>
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div className="calander-buttons">
        <button className="calander-left" onClick={onPervClick}>
          <i className="fas fa-chevron-left"></i>
        </button>
        {times.map((time) => (
          <button
            key={time}
            className={`time-buttton ${
              toggleButton === time && "time-button-active"
            }`}
          >
            {time}
          </button>
        ))}

        <button className="calander-right" onClick={onNextClick}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="calander-days">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
    </div>
  );
}
