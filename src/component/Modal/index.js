import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./modal.scss";

const SendData = async (data) => {
  try {
    const res = await fetch(
      "https://6075978f0baf7c0017fa6847.mockapi.io/api/tasks/todos",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    console.log(`ON SAVE DATA GET`, res.json());
    return res;
  } catch (error) {
    console.log(`ON SAVE DATA ERROR`, error.message);
  }
};

export default function Modal({ open, setOpen }) {
  const dispatch = useDispatch();
  const close = useCallback(() => setOpen(false), [setOpen]);
  const [newTask, setNewTask] = useState({
    task: "",
    date: "",
    complete: false,
  });
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
              SendData(newTask).then((data) =>
                dispatch({ type: "ADD_TODO", payload: data }),
              );
              setNewTask({ task: "", date: "", complete: false });
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
