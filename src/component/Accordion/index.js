import React, { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ CompeleteTasks }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="main-Accordion">
      <div className="accordion-summary">
        <div className="accordion-headline">
          <p>Completed</p>

          <button
            className="accordion-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div
          className={`${
            expanded ? "full-height" : "no-height"
          } accordion-detail`}
        >
          {/* <CompeleteTasks /> */}
        </div>
      </div>
    </div>
  );
}
