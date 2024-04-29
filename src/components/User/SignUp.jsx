import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call kr bhai ya wo bhi mai he kr du?
    console.log(formData);
    navigate("/");
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#4D0000FD] text-white rounded"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
