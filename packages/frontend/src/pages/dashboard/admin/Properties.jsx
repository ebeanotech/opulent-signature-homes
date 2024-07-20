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
  FaUserSecret,
} from "react-icons/fa";
import useScrollToTop from "../../../components/useScrollToTop";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const PropertyCard = ({ property, onEdit, onDelete }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-md rounded-lg overflow-hidden"
  >
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-gray-900 font-semibold">{property.price}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onEdit(property)}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(property)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </motion.div>
);

const Properties = () => {
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
    images: [],
    location: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleEdit = (property) => {
    setEditFormData(property);
    setShowEditModal(true);
  };

  const handleDelete = (property) => {
    setEditFormData(property);
    setShowDeleteConfirmation(true);
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
    <div className="flex overflow-x-hidden max-[450px]:block min-h-screen w-full bg-gray-800 pb-[4rem]">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-50 bg-gray-600 lg:bg-gray-50 shadow w-64 lg:ml-[2%] lg:mt-[1.5%] lg:rounded-lg p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-xl md:text-3xl  pt-6 md:pt-0 max-[450px]:text-white font-bold mb-10 pl-2">
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
            <li className="flex items-center space-x-3 mt-5 cursor-pointer text-white py-1 bg-gray-800 md:bg-gray-600 pl-2">
              <FaBuilding />
              <span>Properties</span>
            </li>
          </Link>
          <Link to={"/dashboard-residents"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer xt-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 md:text-black text-white py-1 pl-2">
              <FaUsers />
              <span>Residents</span>
            </li>
          </Link>
          <Link to={"/dashboard-staff"}>
            <li className="flex items-center space-x-3 mt-5 cursor-pointer text-white md:text-black md:hover:text-white md:hover:bg-gray-600 hover:bg-gray-800 py-1 pl-2">
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
              // handleLogout();
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
      <div className="min-h-screen">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6 mt-3 lg:mt-0 text-white">
            Properties
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90vw] lg:w-96">
            <h2 className="text-xl font-bold mb-4">Edit Property</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={editFormData.image}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  value={editFormData.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Delete Property</h2>
            <p>Are you sure you want to delete this property?</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[93vw] lg:w-96">
            <h2 className="text-xl font-bold mb-4">Add New Property</h2>
            <form onSubmit={handleAddPropertySubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newPropertyForm.title}
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Images</label>
                <input
                  type="file"
                  name="images"
                  multiple
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newPropertyForm.location}
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  value={newPropertyForm.price}
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Bathrooms</label>
                <input
                  type="text"
                  name="bathrooms"
                  value={newPropertyForm.bathrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Bedrooms</label>
                <input
                  type="text"
                  name="bedrooms"
                  value={newPropertyForm.bedrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleAddModalClose}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <BottomNavbar current={"dashboard"} />
    </div>
  );
};

export default Properties;
