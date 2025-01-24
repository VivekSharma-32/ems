import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = ({ data, changeUser }) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{data?.firstName}👏</span>
      </h1>
      <button
        onClick={() => handleLogout()}
        className="bg-red-500 text-white py-2 px-5 rounded-sm text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
