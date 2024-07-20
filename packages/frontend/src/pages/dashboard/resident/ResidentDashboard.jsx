import React, { useState } from "react";
import {
  FaHome,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaCreditCard,
  FaUserSecret,
  FaTools,
} from "react-icons/fa";
import useScrollToTop from "../../../components/useScrollToTop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHouse, FaNairaSign } from "react-icons/fa6";

const Residents = () => {
  useScrollToTop();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex max-[450px]:block min-h-screen w-screen bg-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-50 bg-gray-600 lg:bg-gray-50 shadow w-64 lg:ml-[2%] lg:mt-[1.5%] lg:rounded-lg p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-xl md:text-3xl pt-6 md:pt-0 max-[450px]:text-white font-bold mb-10 pl-2">
          Resident Dashboard
        </h1>
        <ul className="space-y-6">
          <Link to={"/resident-dashboard"}>
            <li
              className="flex items-center space-x-3 cursor-pointer py-1 bg-gray-800 md:bg-gray-600 text-white pl-2"
              onClick={() => setSidebarOpen(false)}
            >
              <FaHome />
              <span>Overview</span>
            </li>
          </Link>
          <Link to={"/home"}>
            <li
              className="flex items-center space-x-3 mt-4 cursor-pointer text-white md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 py-1 pl-2"
              onClick={() => setSidebarOpen(false)}
            >
              <FaArrowLeft />
              <span>Back Home</span>
            </li>
          </Link>
          <Link to={"/resident-code"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2">
              <FaUserSecret />
              <span>Entry Code</span>
            </li>
          </Link>
          <Link to={"/resident-payments"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer py-1 md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white pl-2">
              <FaCreditCard />
              <span>Payments</span>
            </li>
          </Link>
          <Link to={"/resident-maintenance"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer py-1 md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white pl-2">
              <FaTools />
              <span>Maintenance</span>
            </li>
          </Link>
          <li
            className="flex items-center space-x-3 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2"
            onClick={() => {
              setSidebarOpen(false);
            }}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-full z-50"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Main Content */}
      <div className="flex-1 py-4 px-8 ml-6 md:ml-0">
        {/* Top Navbar */}
        <div className="max-w-[80%] mx-auto">
          <div className="lg:ml-[-4vw]">
            <h1 className="text-[1.45rem] md:text-3xl font-bold mb-4 text-white text-center">
              Hello <span className="text-blue-600">David</span>
            </h1>
            <h1 className="text-[1.15rem] md:text-xl font-bold mb-8 text-white text-center">
              What are you doing today?
            </h1>
          </div>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:ml-0">
            <motion.div
              className="bg-gray-50 rounded-lg p-4 w-[100%] md:w-[80%] cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaHome className="text-4xl text-green-500 mx-auto" />
              <p className="text-center text-xl font-semibold mt-4">
                Mangage Property
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-lg p-4 w-[100%] md:w-[80%] cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaHouse className="text-4xl text-blue-500 mx-auto" />
              <p className="text-center text-xl font-semibold mt-4">
                Request Service
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-lg p-4 w-[100%] md:w-[80%] cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaNairaSign className="text-4xl text-purple-500 mx-auto" />
              <p className="text-center text-xl font-semibold mt-4">
                Make Payment
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residents;
