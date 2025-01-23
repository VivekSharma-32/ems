import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Common/CreateTask";
import AllTask from "../Common/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
