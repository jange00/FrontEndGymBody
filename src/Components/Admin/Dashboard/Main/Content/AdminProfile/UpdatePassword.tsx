import React, { useState } from 'react';

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if new password and retype password match
    if (newPassword !== retypePassword) {
      alert('New password and re-type password do not match');
      return;
    }

    // Simulate success message
    console.log('Password updated successfully!');
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);

    // Handle success, e.g., show a success message to the user
    alert('Password updated successfully!');
  };

  return (
    <div className="flex flex-col w-full md:w-2/3 gap-4">
      <div className="bg-primary text-white rounded-2xl p-4 h-full shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="current-password" className="block">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="w-full p-2 rounded-lg text-black"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="w-full p-2 rounded-lg text-black"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="retype-password" className="block">
              Re-type Password
            </label>
            <input
              type="password"
              id="retype-password"
              className="w-full p-2 rounded-lg text-black"
              placeholder="Re-type Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-white text-black py-2 px-8 rounded-xl"
            >
              Change
            </button>
            <button
              type="reset"
              className="bg-white text-black py-2 px-8 rounded-xl"
              onClick={() => {
                setCurrentPassword('');
                setNewPassword('');
                setRetypePassword('');
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
