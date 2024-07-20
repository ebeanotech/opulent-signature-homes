import React, { useState } from "react";
import {
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaArrowLeft,
  FaCreditCard,
  FaSearch,
  FaTools,
  FaBell,
  FaEdit,
  FaTrash,
  FaUserSecret,
} from "react-icons/fa";
import useScrollToTop from "../../../components/useScrollToTop";
import axios from "axios";
import { Link } from "react-router-dom";
import user1 from "./img/bruce-mars.jpg";
import user2 from "./img/ivana-square.jpg";
import user3 from "./img/kal-visuals-square.jpg";
import BottomNavbar from "../../../components/BottomNavbar";

let properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    image: "https://via.placeholder.com/300",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    image: "https://via.placeholder.com/300",
    location: "New York, NY",
    price: "$2,300,000",
  },
  // Add more properties here
];

let residents = [
  {
    id: 1,
    img: user1,
    firstname: "Joshua",
    email: "johndoe@gmail.com",
    role: "owner",
    status: "available",
    registered: "2024/6/8",
  },
  {
    id: 2,
    img: user2,
    firstname: "Stephanie",
    email: "stephanie@gmail.com",
    role: "tenant",
    status: "outdoor",
    registered: "2023/10/11",
  },
  {
    id: 3,
    img: user3,
    firstname: "Gloria",
    email: "gloria@gmail.com",
    role: "owner",
    status: "available",
    registered: "2021/12/21",
  },
];

const Residents = () => {
  useScrollToTop();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: null,
    title: "",
    image: "",
    location: "",
    price: "",
  });
  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    images: [], // Updated to handle multiple images
    location: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDeleteConfirm = () => {
    const updatedProperties = properties.filter(
      (property) => property.id !== editFormData.id
    );
    properties = updatedProperties;
    setShowDeleteConfirmation(false);
    alert(`Property with ID ${editFormData.id} deleted!`);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Property updated!");
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleAddModalOpen = () => {
    setShowAddModal(true);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleNewPropertyInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setNewPropertyForm({
        ...newPropertyForm,
        images: files,
      });
    } else {
      setNewPropertyForm({
        ...newPropertyForm,
        [name]: value,
      });
    }
  };

  const handleAddPropertySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newPropertyForm.title);
    for (let i = 0; i < newPropertyForm.images.length; i++) {
      formData.append("images", newPropertyForm.images[i]);
    }
    formData.append("location", newPropertyForm.location);
    formData.append("price", newPropertyForm.price);
    formData.append("bathrooms", newPropertyForm.bathrooms);
    formData.append("bedrooms", newPropertyForm.bedrooms);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newProperty = {
        id: properties.length + 1,
        ...newPropertyForm,
        images: response.data.map((file) => file.path), // Save file paths returned from the server
      };

      properties.push(newProperty);
      setShowAddModal(false);
      setNewPropertyForm({
        title: "",
        images: [],
        location: "",
        price: "",
        bathrooms: "",
        bedrooms: "",
      });
    } catch (error) {
      console.error("There was an error uploading the images:", error);
    }
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
          Admin Dashboard
        </h1>
        <ul className="space-y-6">
          <Link to={"/admin-dashboard"}>
            <li
              className="flex items-center space-x-3 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2"
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
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 md:text-black md:hover:text-white md:hover:bg-gray-600 text-white py-1 pl-2"
            onClick={() => {
              handleAddModalOpen();
              setSidebarOpen(false);
            }}
          >
            <FaPlus />
            <span>Create New Listing</span>
          </li>
          <Link to={"/dashboard-properties"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2">
              <FaBuilding />
              <span>Properties</span>
            </li>
          </Link>
          <Link to={"/dashboard-residents"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer py-1 bg-gray-800 md:bg-gray-600 text-white pl-2">
              <FaUsers />
              <span>Residents</span>
            </li>
          </Link>
          <Link to={"/dashboard-staff"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2">
              <FaUserTie />
              <span>Staff</span>
            </li>
          </Link>
          <Link to={"/dashboard-payments"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2">
              <FaCreditCard />
              <span>Payments</span>
            </li>
          </Link>
          <Link to={"/entry-code"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 text-white py-1 pl-2">
              <FaUserSecret />
              <span>Entry Code</span>
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
      <div className="lg:w-[74vw] lg:ml-10 pt-4 lg:pt-6 max-[450px]:px-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[0.8rem] lg:text-[1.7rem] ml-11 lg:ml-0 font-bold text-white">
            All Residents
          </h2>

          <span className="flex gap-4 lg:gap-8">
            <form id="search-form">
              <FaSearch className="absolute mt-[0.74rem] ml-2 text-gray-400" />
              <input
                type="text"
                placeholder="Find Resident"
                className="py-[0.45rem] lg:py-2 max-[450px]:w-[9rem] pl-8 rounded-lg shadow-md shadow-gray-300"
              />
            </form>
            <span className="flex text-white gap-3 items-center">
              <FaTools className="cursor-pointer hover:text-blue-400" />
              <FaBell className="cursor-pointer hover:text-blue-400" />
            </span>
          </span>
        </div>

        <div className="bg-gray-50 max-[450px]:overflow-x-scroll py-3 lg:py-5 max-[450px]:pl-2 max-[450px]:pr-4 lg:px-5 rounded-xl shadow shadow-gray-500 mt-[12%] lg:mt-[5%] z-20 absolute w-[95.5vw] lg:w-[74vw]">
          <table className="w-[95vw] lg:w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-1 lg:py-2 text-left pl-4 pr-5">Resident</th>
                <th className="py-1 lg:py-2 text-left pl-4 pr-5">Role</th>
                <th className="py-1 lg:py-2 text-center pl-4 pr-5">Status</th>
                <th className="py-1 lg:py-2 text-left pl-4 pr-5">Registered</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((user) => (
                <tr key={user.id} className="border-b border-gray-300">
                  <td className="px-2 lg:px-4 py-2">
                    <div className="my-1 lg:my-2 block lg:flex gap-3">
                      <span>
                        <img
                          src={user.img}
                          alt=""
                          className="w-[3rem] lg:w-[4rem] rounded-lg"
                        />
                      </span>
                      <span>
                        <h2>{user.firstname}</h2>
                        <h2>{user.email}</h2>
                      </span>
                    </div>
                  </td>
                  <td className="px-2 lg:px-4 py-2">
                    <div className="my-2">
                      <h2>{user.role}</h2>
                    </div>
                  </td>
                  <td className="px-2 lg:px-4 py-2">
                    <div className="my-2">
                      <h2
                        className={`py-2 max-[450px]:px-2 shadow shadow-gray-300 text-center rounded-lg ${
                          user.status === "available"
                            ? "bg-emerald-500"
                            : "bg-gradient-to-b from-gray-400 to-gray-600"
                        }  text-white font-bold`}
                      >
                        {user.status}
                      </h2>
                    </div>
                  </td>
                  <td className="px-2 lg:px-4 py-2">
                    <div className="my-2">
                      <h2>{user.registered}</h2>
                    </div>
                  </td>
                  <td className="px-2 lg:px-4 py-2">
                    <div className="my-0 lg:my-2 grid grid-cols-1 md:grid-cols-2 gap-3 lg:flex lg:gap-1 mt-[35%]">
                      <FaEdit className="cursor-pointer hover:text-blue-600" />
                      <FaTrash className="text-red-600 cursor-pointer hover:text-red-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-100 mt-[50vh] lg:mt-[50vh] h-[70vh] lg:h-[50vh] absolute w-[100vw]">
        <p className="lg:ml-[24vw] lg:mt-[38vh]">
          {" "}
          &copy; 2024. Built by <b>Ebeano Tech</b>
        </p>
      </div>

      {/* Add New Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[96vw] lg:max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add New Property</h2>
              <button
                onClick={handleAddModalClose}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleAddPropertySubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newPropertyForm.title}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Images
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  multiple
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newPropertyForm.location}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={newPropertyForm.price}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Bathrooms
                </label>
                <input
                  type="text"
                  name="bathrooms"
                  value={newPropertyForm.bathrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Bedrooms
                </label>
                <input
                  type="text"
                  name="bedrooms"
                  value={newPropertyForm.bedrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Edit Property</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={editFormData.image}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={editFormData.price}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Update Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Confirm Delete</h2>
            <p className="mb-6">
              Are you sure you want to delete this property?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteCancel}
                className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <BottomNavbar current={"dashboard"} />
    </div>
  );
};

export default Residents;
