import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../redux/selector";
import "./Calander.scss";

const days = Array.from({ length: 30 }, (_, i) => i + 1);

const TaskDay = ({ tasks, calanderDay }) => {
  return tasks.map((task, i) => {
    const day = new Date(task.date).getDate();
    if (day === calanderDay) return <p key={i}>{task.task}</p>;
  });
};
export default function Calander() {
  const allTodos = useSelector(getTodos);
  return (
    <div className="calander-dates">
      {days.map((day) => (
        <div className="calander-date" key={day}>
          <p>{day}</p>
          <TaskDay tasks={allTodos} calanderDay={day} />
        </div>
      ))}
    </div>
  );
}
