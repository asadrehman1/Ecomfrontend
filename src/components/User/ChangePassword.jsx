import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.newPassword !== formData.confirmPassword) {
        console.error("New passwords do not match");
        return;
      }

      // le bhai tere liye kr di API call
      await axios.put("/api/user/change-password", {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      });
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div className="mx-auto md:w-[70%] p-6 bg-white shadow-md rounded-md my-10">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Change Password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block text-gray-700 mb-2">
            Old Password:
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 mb-2">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4D0000FD] text-white px-6 py-3 rounded-md transition duration-300 ease-in-out"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
