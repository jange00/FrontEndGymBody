import React, { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  // Static data simulating the gym owner's details
  const email = "owner@example.com";
  const ownerName = "John Doe";
  
  const navItems = [
    { link: "Dashboard", icon: <MdSpaceDashboard className="mr-2" />, path: "/admin/dashboard" },
    { link: "Admin Profile", icon: <FaHome className="mr-2" />, path: "/admin/adminprofile" },
    { link: "Registration", icon: <MdAppRegistration className="mr-2" />, path: "/admin/registeration" },
    { link: "Plan", icon: <FaBook className="mr-2" />, path: "/admin/plan" },
    { link: "View Members", icon: <IoPeopleSharp className="mr-2" />, path: "/admin/viewmembers" },
    { link: "Report", icon: <FaBookOpen className="mr-2" />, path: "/admin/report" },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("registration_Id");
    window.location.href = "/admin/login";
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="bg-primary text-white flex flex-col items-center py-4 w-full md:w-64 md:rounded-l-xl">
      <div className="flex flex-col items-center mb-8">
        <CgProfile className="w-full h-20" />
        <h2 className="text-lg font-semibold text-center md:text-left">{ownerName}</h2>
        <p className="text-sm text-center md:text-left">{email}</p>
      </div>
      <div className="w-full px-4 md:px-0">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={`${item.path}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mb-2 rounded-xl hover:font-bold ${isActive ? 'bg-white text-black' : 'text-white'}`
            }
          >
            {item.icon}{item.link}
          </NavLink>
        ))}
        <button
          className="flex items-center px-4 py-2 mb-2 rounded-xl hover:font-bold text-white"
          onClick={handleLogout}
        >
          <MdLogout className="mr-2" />Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-primary mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button className="bg-green text-white px-4 py-2 rounded-lg" onClick={logout}>Yes</button>
              <button className="bg-red text-white px-4 py-2 rounded-lg" onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
