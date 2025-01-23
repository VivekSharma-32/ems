import React from "react";
import Header from "../Common/Header";
import TaskListNumbers from "../Common/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log(data);

  return (
    <div className="p-10 bg[#1c1c1c] h-screen">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
