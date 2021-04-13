import React from "react";

export default function MainTop() {
  return (
    <div>
      <div>
        <h3>November 2019</h3>
        <p className="bold">Today</p>
        <small>18 , Mon</small>

        <div className="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div>
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        <div>
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div>
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
