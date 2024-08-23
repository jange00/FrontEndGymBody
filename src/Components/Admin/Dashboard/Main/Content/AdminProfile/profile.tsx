import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const Profile = () => {
  return (
    <div className="bg-primary text-white rounded-2xl p-4 w-full md:w-1/2 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="rounded-full p-4">
          <CgProfile className="w-24 h-24" />
        </div>
        <button className="flex items-center space-x-2 mb-4">
          <MdOutlinePublishedWithChanges className="w-4 h-4" />
          <span>Update Profile</span>
        </button>
        <div className="text-left w-full h-48 overflow-y-auto">
          <div className="flex">
            <div className="space-y-7">
              <p className="font-semibold">
                Gym Name<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Owner Name<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Contact Number<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Email Address<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Location<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Opening Time<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Closing Time<span className="cursor-pointer">⋮</span>
              </p>
              <p className="font-semibold">
                Established Date<span className="cursor-pointer">⋮</span>
              </p>
            </div>
            <div className="space-y-7 space-x-3">
              <p>Gym Name Placeholder</p>
              <p>Owner Name Placeholder</p>
              <p>Contact Number Placeholder</p>
              <p>Email Address Placeholder</p>
              <p>Location Placeholder</p>
              <p>Opening Time Placeholder</p>
              <p>Closing Time Placeholder</p>
              <p>Established Date Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
