import React from "react";
import avatar from "./img/avatar.jfif";
export default function LeftMenu() {
  return (
    <div>
      <div>
        <img src={avatar} alt="avatar" width={30} />
        <p> David Beckham</p>
        <p className="bold">Nate!</p>
        <hr />
      </div>

      <button>
        <i class="far fa-plus"></i>
        Add a Task
      </button>
      <ul>
        <li>
          <input type="radio" id="task" name="task" value="a new task" />
          <label for="task">a new task</label>
        </li>
      </ul>
    </div>
  );
}
