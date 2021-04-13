import React from "react";
import Accordion from "./Accordion";
import avatar from "./img/avatar.jfif";
import "./LeftMenu.scss";

export default function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="flex align-center">
        <img src={avatar} alt="avatar" className="avatar" width={30} />
        <div className="title">
          <p> David Beckham</p>
          <p className="bold">Nate!</p>
        </div>
      </div>
      <hr className="divider" />
      <div style={{ marginRight: 16 }}>
        <div className="task-div">
          <button className="add-task">
            <i class="plus far fa-plus"></i>
            <span>Add a Task</span>
          </button>

          <ul className="task-list">
            <li className="task-list-item">
              <input type="radio" id="task" name="task" value="a new task" />
              <div className="grid">
                <label for="task" className="bold">
                  a new task
                </label>
                <small>today</small>
              </div>
            </li>
          </ul>
        </div>

        <Accordion />
      </div>
    </div>
  );
}
