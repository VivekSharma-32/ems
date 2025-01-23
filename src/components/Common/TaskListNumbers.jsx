import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex screen gap-5 mt-10">
      <div className="w-[45%] px-10 bg-blue-400 rounded-xl py-6 ">
        <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] px-10 bg-green-400 rounded-xl py-6 ">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] px-10 bg-yellow-400 rounded-xl py-6 ">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="w-[45%] px-10  bg-red-400 rounded-xl py-6 ">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
