import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/forgot-password", { email });
      //response handle krlo
    } catch (error) {
      console.error("Error sending reset link:", error);
      setMessage("An error occurred while sending the reset link.");
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Forgot Password
      </h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#4D0000FD] text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
