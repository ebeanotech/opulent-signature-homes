import React from "react";

const FilterAside = ({ onFilterChange, sidebarOpen }) => {
  return (
    <aside
      className={`w-64 md:block absolute md:relative py-6 ${
        sidebarOpen ? "inline-block" : "hidden"
      } mt-1 px-4 bg-gray-950 text-white h-[100vh]`}
    >
      <h2 className="text-xl font-bold mb-4">Filter Properties</h2>
      <div>
        <button
          className="block w-full text-left p-2 hover:bg-gray-200"
          onClick={() => onFilterChange("")}
        >
          All
        </button>
        <button
          className="block w-full text-left p-2 hover:bg-gray-200"
          onClick={() => onFilterChange("Duplex")}
        >
          Duplex
        </button>
        <button
          className="block w-full text-left p-2 hover:bg-gray-200"
          onClick={() => onFilterChange("Bungalow")}
        >
          Bungalow
        </button>
        <button
          className="block w-full text-left p-2 hover:bg-gray-200"
          onClick={() => onFilterChange("Apartment")}
        >
          Apartment
        </button>
      </div>
    </aside>
  );
};

export default FilterAside;
