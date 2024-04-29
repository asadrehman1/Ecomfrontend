import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    // API call kr le bhai...
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Login
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
        <p className="my-4 underline">
          <Link to="/forgot-password">Forgot Password ?</Link>
        </p>
        <button
          type="submit"
          className="w-full p-2 bg-[#4D0000FD] text-white rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
