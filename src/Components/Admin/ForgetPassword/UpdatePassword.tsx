import React from 'react'
import updatepassword from "../../../assets/loginlogo.png"
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const handleupdate = () => {
    navigate ("/admin/ForgetPassword/verify")
  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-loginbgcolor">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl">

            <div>
            <img src={updatepassword} alt="Body Garage Logo" className="w-96 h-96 object-contain"/>
            </div>
            
            <form>
            <h2 className="text-2xl font-semibold  mb-4 text-primary">Update Password</h2>
              <div className="mb-4">
                <label htmlFor="new-password" className="block mb-2">New Password<span className="text-red-500">*</span></label>
                <input type="password" id="new-password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary rounded-xl" required/>
              </div>

              <div className="mb-6">
                <label htmlFor="retype-password" className="block mb-2">Re-type Password<span className="text-red-500">*</span></label>
                <input type="password" id="retype-password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary rounded-xl" required/>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-3xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={handleupdate}
              >Update</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default UpdatePassword