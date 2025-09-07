import React from "react";
import { Link } from "react-router-dom";

const ProfileIndex = () => {
  const user = {
    name: "Aziz",
    email: "aziz@example.com",
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <div className="mt-4">
        <Link
          to="/profile/settings"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Settings
        </Link>
      </div>
    </div>
  );
};

export default ProfileIndex;
