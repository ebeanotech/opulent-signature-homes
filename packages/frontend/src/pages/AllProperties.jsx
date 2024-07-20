import React, { useState } from "react";
import PropertyCard from "../components/PropertyColumn";
import FilterAside from "../components/FilterAside";
import bongalo1 from "../assets/img/bongalo1.JPG";
import duplex1 from "../assets/img/duplex1.JPG";
import duplex2 from "../assets/img/duplex2.JPG";
import bongalo2 from "../assets/img/bongalo2.JPG";
import duplex3 from "../assets/img/duplex3.JPG";
import bongalo3 from "../assets/img/bongalo3.JPG";
import bongalo4 from "../assets/img/bongalo4.JPG";
import duplex4 from "../assets/img/duplex4.JPG";
import duplex5 from "../assets/img/duplex5.JPG";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdMenu, MdCancel } from "react-icons/md";
import useScrollToTop from "../components/useScrollToTop";
import BottomNavbar from "../components/BottomNavbar";

const propertiesData = [
  {
    id: 1,
    type: "Bungalow",
    name: "Cozy Bungalow 1",
    img: bongalo1,
    location: "Los Angeles",
    price: "58,000,000",
    condition: "sale",
  },
  {
    id: 2,
    type: "Duplex",
    name: "Luxury Duplex 1",
    img: duplex1,
    location: "New York",
    price: "125,000,000",
    condition: "sale",
  },
  {
    id: 3,
    type: "Duplex",
    name: "Luxury Duplex 2",
    img: duplex2,
    location: "New York",
    price: "250,000,000",
    condition: "rent",
  },
  {
    id: 4,
    type: "Bungalow",
    name: "Luxury Bungalow 2",
    img: bongalo2,
    location: "New York",
    price: "43,000,000",
    condition: "rent",
  },
  {
    id: 5,
    type: "Duplex",
    name: "Luxury Duplex 3",
    img: duplex3,
    location: "New York",
    price: "132,000,000",
    condition: "sale",
  },
  {
    id: 6,
    type: "Bungalow",
    name: "Luxury Bungalow 3",
    img: bongalo3,
    location: "New York",
    price: "67,000,000",
    condition: "sale",
  },
  {
    id: 7,
    type: "Duplex",
    name: "Luxury Duplex 4",
    img: duplex4,
    location: "New York",
    price: "90,000,000",
    condition: "sale",
  },
  {
    id: 8,
    type: "Bungalow",
    name: "Luxury Bungalow 4",
    img: bongalo4,
    location: "New York",
    price: "34,000,000",
    condition: "rent",
  },
  {
    id: 9,
    type: "Duplex",
    name: "Luxury Duplex 5",
    img: duplex5,
    location: "New York",
    price: "105,000,000",
    condition: "rent",
  },
  {
    id: 10,
    type: "Apartment",
    name: "Modern Apartment",
    location: "Chicago",
    price: "400,000",
    condition: "sale",
    img: "https://via.placeholder.com/300",
  },
  // Add more properties as needed
];

const AllProperties = () => {
  useScrollToTop();
  const [filteredType, setFilteredType] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFilterChange = (filterValue) => {
    setFilteredType(filterValue);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const filterProperties = (property) => {
    if (!filteredType) {
      return true;
    } else {
      const [type, condition] = filteredType.split(",");
      if (type === property.type) {
        if (condition === "All") {
          return true;
        } else {
          return property.condition === condition.toLowerCase();
        }
      }
      return false;
    }
  };

  const filteredProperties = propertiesData.filter(filterProperties);

  return (
    <>
      <div className="flex">
        <div className="md:hidden absolute z-50 ml-2 mt-2 text-2xl cursor-pointer">
          {sidebarOpen ? (
            <MdCancel className="text-white" onClick={toggleSidebar} />
          ) : (
            <MdMenu onClick={toggleSidebar} />
          )}
        </div>

        <div className={`md:block`}>
          <FilterAside
            sidebarOpen={sidebarOpen}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-1 pt-4 lg:py-6 pl-3 pr-8 pb-[7em] lg:pb-8">
          <div className="lg:flex block justify-between items-center mb-4">
            <h1 className="text-2xl font-bold flex gap-2 ml-[20%] lg:ml-0 items-center">
              All Properties{" "}
              <IoHome className="text-blue-600 hover:text-blue-800 mr-1 animate-pulse" />
            </h1>
            <Link to={"/home"}>
              <button className="py-2 px-4 max-[450px]:hidden bg-blue-600 hover:bg-blue-800 text-white rounded-lg">
                Home
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ml-[5%] lg:ml-[18%] lg:w-[85%]">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                img={property.img}
                name={property.name}
                location={property.location}
                price={property.price}
                condition={property.condition}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNavbar current={"all-properties"} />
    </>
  );
};

export default AllProperties;
