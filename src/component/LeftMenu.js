import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeItComplete } from "../redux/addtodo-actions";
import { getTodos } from "../redux/selector";
import Accordion from "./Accordion";
import avatar from "./img/avatar.jfif";
import "./LeftMenu.scss";
import Modal from "./Modal";

const fetchData = async () => {
  const res = await fetch(
    "https://6075978f0baf7c0017fa6847.mockapi.io/api/tasks/todos",
  );
  return res.json();
};

export default function LeftMenu(props) {
  const [open, setOpen] = useState(false);
  const allTodos = useSelector(getTodos);
  const completeTodo = allTodos?.filter((task) => task.complete === true);
  const dispatch = useDispatch();
  console.log(`allTodos`, allTodos);
  useEffect(() => {
    fetchData().then((data) => dispatch({ type: "SET_TASKS", payload: data }));
  }, [dispatch]);

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
          <button className="add-task" onClick={() => setOpen(true)}>
            <i className="plus far fa-plus"></i>
            <span>Add a Task</span>
          </button>

          <ul className="task-list">
            {allTodos?.length ? (
              allTodos
                .filter((task) => task.complete !== true)
                .map((todo, i) => (
                  <li key={i} className="task-list-item">
                    <input
                      type="radio"
                      id="task"
                      name={todo.task}
                      value={todo.task}
                      onClick={() => dispatch(makeItComplete(i))}
                    />
                    <div className="grid">
                      <label htmlFor="task" className="bold">
                        {todo.task}
                      </label>
                      <small>{todo.date}</small>
                    </div>
                  </li>
                ))
            ) : (
              <p>No Task</p>
            )}
          </ul>
        </div>

        <Accordion tasks={completeTodo} />
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
