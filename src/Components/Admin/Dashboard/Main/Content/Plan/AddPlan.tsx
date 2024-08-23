import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const AddPlan = () => {

  return (
    <div className="bg-primary text-white p-6 rounded-2xl shadow-md mb-6 w-full">
      <div>
        <form className='grid grid-cols-1 md:grid-cols-1'>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 w-full md:w-1/2 md:pr-2">
              <label htmlFor="package_Name" className="block mb-2">
                Plan Name
              </label>
              <input
                id="package_Name"
                type="text"
                className="p-2 rounded-lg text-black w-full"
                placeholder="Enter plan name"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-1/2 md:pl-2">
              <label htmlFor="validity" className="block mb-2">
                Validity
              </label>
              <select
                id="validity"
                className="p-2 rounded-lg text-black w-full"
                required
              >
                <option value="">Choose a validity</option>
                <option>7 Days</option>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">
              Price
            </label>
            <input
              id="amount"
              type="number"
              className="p-2 rounded-lg text-black w-full"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <button type="submit" className="bg-white text-black px-4 py-2 rounded-xl">
              Save
            </button>
            <button type="button" className="bg-white text-black px-4 py-2 rounded-xl">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlan;
