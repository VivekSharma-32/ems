import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed Task</h5>
        <h5 className="w-1/5">Failed Task</h5>
      </div>
      <div>
        {userData.map((employee, idx) => (
          <div
            className="border border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            key={idx}
          >
            <h2 className="text-lg font-medium w-1/5 text-white">
              {employee.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">
              {employee.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {employee.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-white-600">
              {employee.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {employee.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
