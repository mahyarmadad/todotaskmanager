import React, { useCallback, useState } from "react";
import { addToDO } from "../../redux/addtodo-actions";
import "./modal.scss";
export default function Modal({ open, setOpen }) {
  const close = useCallback(() => setOpen(false), [setOpen]);
  const [newTask, setNewTask] = useState({ task: "", date: "" });
  const handelChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  return open ? (
    <div className="modal modal-fade">
      <div className="modal-overlay" onClick={close} />
      <div className="modal-body">
        <div className="form">
          <div className="grid">
            <label htmlFor="newTask">Add a New Task</label>
            <input
              id="newTask"
              name="task"
              value={newTask.task}
              onChange={handelChange}
            />
          </div>

          <div className="grid">
            <label htmlFor="taskDate">Task Date</label>
            <input
              type="date"
              id="taskDate"
              name="date"
              value={newTask.date}
              onChange={handelChange}
            />
          </div>

          <button
            className="done-button"
            onClick={() => {
              close();
              addToDO(newTask);
              setNewTask({ task: "", date: "" });
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
