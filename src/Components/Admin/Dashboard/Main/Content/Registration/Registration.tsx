import React, { useState } from 'react';

const Registration = () => {
 

  const [contactNumber, setContactNumber] = useState("");

  return (
    <div className="bg-loginbgcolor min-h-screen p-4 md:p-8">
      <div className='w-full max-w-4xl'>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 pl-4 md:pl-0">Become a Member!</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 pl-4 md:pl-0">Register</h2>
      </div>
      <div className="bg-primary p-4 md:p-6 rounded-2xl max-w-3xl mx-auto">
        <div className="p-4 rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" >
            <div>
              <label className="block text-white mb-1">Name of Client</label>
              <input
                type="text"
                name="name"
               
                className="w-full p-2 rounded-xl"
                placeholder='Client Name'
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1">Date of Join</label>
              <input
                type="date"
                name="dateOfJoin"
                
                className="w-full p-2 rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                
                className="w-full p-2 rounded-xl"
                placeholder='email@example.com'
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1">Contact No.</label>
              <input
                type="text"
                name="contactNumber"
              
                className="w-full p-2 rounded-xl"
                placeholder='98XXXXXXXX'
                pattern="[0-9]{10}"
                
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1">Plan</label>
              <select
                name="plan"
                
                className="w-full p-2 rounded-xl"
                required
              >
                <option value="">Choose a plan</option>
                {/* Add your static plan options here */}
                <option value="plan1">Plan 1</option>
                <option value="plan2">Plan 2</option>
                <option value="plan3">Plan 3</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-1">Price</label>
              <input
                type="number"
                name="price"
                
                className="w-full p-2 rounded-xl"
                placeholder='Price'
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end space-x-4 mt-4">
              <button type="submit" className="bg-white text-black py-2 px-4 md:px-8 rounded-xl">Register</button>
              <button type="button" className="bg-white text-black py-2 px-4 md:px-8 rounded-xl">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
