import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

const NavBar: React.FC = () => {
  const navItems = [
    { link: "About", path: "abouts" },
    { link: "Plan", path: "plans" },
    // { link: "Coaches", path: "coaches" },
    { link: "Visit our Gym", path: "visit" },
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-0 px-6 md:px-12 flex justify-between items-center font-serif">
      <div className="flex justify-center items-center ">
        <a href="#" className="text-sm font-bold">
          <img src={logo} alt="loading..." className="w-40" />
        </a>
        
      </div>
      <div className="hidden md:flex space-x-12 ml-96 ">
          {navItems.map((item, index) => (
            <NavLink key={index} to={`/${item.path}`} className="block hover:font-bold hover:underline  text-primary">
              {item.link}
            </NavLink>
          ))}
        </div>
      <div className="hidden md:block pr-12">
        <button className="bg-primary text-white rounded-3xl py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-75">
          <a href="#register-now" no-underline text-white>Join Now</a>
        </button>
      </div>
      
      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-4 z-20">
            <div className="flex justify-between items-center">
              <a href="#" className="text-sm font-bold">
                <img src={logo} alt="loading..." className="w-20" />
              </a>
              <button onClick={toggleSidebar} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav className="mt-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.path}`}
                  className="block py-2"
                  onClick={toggleSidebar}
                >
                  {item.link}
                </NavLink>
              ))}
              <button className="w-full bg-primary text-white rounded-3xl py-2 mt-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-75">
                Join Now
              </button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
