import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import singup from "../../../assets/loginlogo.png";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const GymDetails = () => {
  const { control, handleSubmit } = useForm();
  const openingTimeRef = useRef<HTMLInputElement>(null);
  const closingTimeRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date | null>(null);

  const navigate = useNavigate();
  const handlesubmit=()=>{
    navigate("/admin/dashboard")
  }

  const CustomDateInput = ({ value, onClick }: { value?: string; onClick?: () => void }) => (
    <div className="relative mt-1 w-54">
      <input
        type="text"
        value={value}
        onClick={onClick}
        readOnly
        className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
        placeholder="Select Date"
      />
      <span
        onClick={onClick}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
      >
        <FaCalendarAlt />
      </span>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-loginbgcolor">
      <div className="flex bg-white p-8 rounded-xl shadow-xl w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex justify-end">
          <img src={singup} alt="Body Garage Logo" className="w-96 object-contain" />
        </div>

        <form className="p-8" onSubmit={handleSubmit(() => {})}>
          <h2 className="text-2xl font-semibold mb-4 text-primary">GYM Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-54">
              <label className="block text-sm font-medium">
                Owner Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                placeholder="Owner Name"
              />
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                Opening Time<span className="text-red">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type="time"
                  ref={openingTimeRef}
                  className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                />
                <span
                  onClick={() => openingTimeRef.current?.focus()}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                >
                  <FaClock />
                </span>
              </div>
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                GYM Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                placeholder="GYM Name"
              />
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                Closing Time<span className="text-red">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type="time"
                  ref={closingTimeRef}
                  className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                />
                <span
                  onClick={() => closingTimeRef.current?.focus()}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <FaClock />
                </span>
              </div>
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                Location<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                placeholder="Location"
              />
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                Established Date<span className="text-red">*</span>
              </label>
              <Controller
                control={control}
                name="establishedDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                      setDate(date);
                    }}
                    customInput={<CustomDateInput />}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
            </div>

            <div className="w-54">
              <label className="block text-sm font-medium">
                Contact Number<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-2"
                placeholder="Contact Number"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GymDetails;
