import React, { useState } from "react";
import { addToDO } from "../../redux/addtodo-actions";
import "./Accordion.scss";

export default function Accordion({ tasks }) {
  const [expanded, setExpanded] = useState(false);
  console.log(`Complete tasks`, tasks);
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
          {tasks.map((todo, i) => (
            <li key={i} className="complete-list-item">
              <p>{todo.task}</p>
              <small>{todo.date}</small>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
