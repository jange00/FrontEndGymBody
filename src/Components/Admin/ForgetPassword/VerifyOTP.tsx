import React from 'react'
import verifyOTP from "../../../assets/loginlogo.png"
import { useNavigate } from 'react-router-dom'

const VerifyOTP = () => {
  const navigate = useNavigate();
  const handleverify = () => {
    navigate ("/admin/login")
  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-loginbgcolor">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl">
            <div>
                <img src={verifyOTP} alt="Body Garage Logo" className="w-96 h-96 object-contain"/>
                </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Verify OTP</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium ">Enter OTP<span className="text-red">*</span></label>
                  <input type="text" id="otp" name="otp" className="mt-1 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full  px-3 py-2 border  rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-2" placeholder='OTP' required/>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-3xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={handleverify}
                >Verify</button>
              </form>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default VerifyOTP