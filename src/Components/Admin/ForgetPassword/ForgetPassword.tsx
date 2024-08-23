import React from "react";
import forgetpassword from "../../../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate ();
  const onSend = () => {
    navigate ("/admin/ForgetPassword/")
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-loginbgcolor">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl">
          <div className="w-full h-auto">
            <img
              src={forgetpassword}
              alt="Body Garage Logo"
              className="w-96 h-96 object-contain"
            />
          </div>
          <form className="w-full max-w-sm">
            <h2 className="text-2xl text-center font-bold text-primary">
              Forget Password
            </h2>
            <div className="mb-4">
              <label
                className="block text-sm  mb-2"
                htmlFor="username"
              >
                Username<span className="text-red">*</span>
              </label>
              <input
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full  px-3 py-2 border  rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-2"
                id="username"
                type="text"
                placeholder="Username" required
              />
            </div>

            <div className="mb-6">
              <label
                className="block  text-sm mb-2"
                htmlFor="email"
              >
                Email<span className="text-red">*</span>
              </label>
              <input
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full  px-3 py-2 border  rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-2"
                id="email"
                type="email"
                placeholder="email@example.com" required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-3xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 "
                onClick={onSend}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
