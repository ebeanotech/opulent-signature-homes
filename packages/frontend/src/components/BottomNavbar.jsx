import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaEnvelope, FaUser } from "react-icons/fa";

const BottomNavbar = ({ current }) => {
  return (
    <div className="fixed lg:hidden bottom-0 left-0 right-0 bg-gray-800 text-white shadow-md">
      <div className="flex justify-around py-2">
        <Link
          to="/home"
          className={`flex flex-col items-center px-3 py-1 ${
            current === "home" ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <FaHome className="text-lg" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/all-properties"
          className={`flex flex-col items-center px-3 py-1 ${
            current === "all-properties" ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <FaBuilding className="text-lg" />
          <span className="text-xs mt-1">Properties</span>
        </Link>
        <Link
          to="/contact"
          className={`flex flex-col items-center px-3 py-1 ${
            current === "contact" ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <FaEnvelope className="text-lg" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
        <Link
          to="/admin-dashboard"
          className={`flex flex-col items-center px-3 py-1 ${
            current === "dashboard" ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <FaUser className="text-lg" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
