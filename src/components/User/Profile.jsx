import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="mx-auto md:w-[70%] p-6 bg-white shadow-md rounded-md my-10">
      <h1 className="md:text-[56px] text-2xl text-[#4D0000FD] text-center my-10">
        Profile
      </h1>
      {userData ? (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username:</label>
            <p className="border-b border-gray-300 pb-2">{userData.username}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <p className="border-b border-gray-300 pb-2">{userData.email}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/edit-profile"
              className="bg-[#4D0000FD] text-white px-6 py-3 rounded-md mr-4"
            >
              Edit Profile
            </Link>
            <Link
              to="/change-password"
              className="bg-[#4D0000FD] text-white px-6 py-3 rounded-md"
            >
              Change Password
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
