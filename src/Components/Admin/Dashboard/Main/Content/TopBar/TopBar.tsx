import React from "react";
import logo from "../../../../../../assets/logo.png";
import { IoMdNotifications } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="bg-loginbgcolor flex justify-between items-center w-full h-20 px-4 py-2 rounded-tr-xl pr-20 ">
      <div className="flex items-center w-full h-full pt-10">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="font-bold text-black">
          Feedback
        </a>
        <IoMdNotifications className="h-5 w-5 text-black" />
      </div>
    </div>
  );
};

export default TopBar;
