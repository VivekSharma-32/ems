import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
    >
      {data.tasks.map((task, i) => {
        if (task.active) {
          return <AcceptTask key={i} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={i} data={task} />;
        }

        if (task.completed) {
          return <CompleteTask key={i} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={i} data={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
