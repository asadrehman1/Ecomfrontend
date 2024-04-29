import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/user/reset-password", {
        token,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("An error occurred while resetting the password.");
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Reset Password
      </h1>
      <form onSubmit={handleChangePassword} className="mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#4D0000FD] text-white rounded"
        >
          Reset Password
        </button>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
