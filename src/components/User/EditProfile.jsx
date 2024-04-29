import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      const { username, email } = response.data;
      setFormData({ username, email });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

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
      await axios.put("/api/user/profile", formData);
      //redirect krwa le
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="mx-auto md:w-[70%] p-6 bg-white shadow-md rounded-md my-10">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Edit Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4D0000FD] text-white px-6 py-3 rounded-md transition duration-300 ease-in-out"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
