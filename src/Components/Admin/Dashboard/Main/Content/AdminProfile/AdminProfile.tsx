import React from "react";
import Profile from "./profile";
import UpdatePassword from "./UpdatePassword";

const AdminProfile = () => {
  return (
    <>
      <div className="h-screen bg-loginbgcolor">
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-loginbgcolor">
          <h1 className="font-bold text-4xl text-primary">Admin Information</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-loginbgcolor">
          <Profile />
          <UpdatePassword />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
