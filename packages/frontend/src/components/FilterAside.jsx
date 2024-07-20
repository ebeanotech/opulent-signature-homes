import React from "react";

const FilterAside = ({ onFilterChange, sidebarOpen }) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <aside
      className={`w-64 md:block z-40 absolute md:fixed py-6 ${
        sidebarOpen ? "inline-block z-40 fixed" : "hidden"
      } mt-1 px-4 bg-gray-950 text-white h-[100vh]`}
    >
      <h2 className="text-xl font-bold mb-4">Filter Properties</h2>
      <div>
        <button
          className="block w-full text-left p-2 hover:bg-gray-200 hover:text-black"
          onClick={() => onFilterChange("")}
        >
          All
        </button>
        <div className="mt-4">
          <label htmlFor="duplexFilter" className="block text-sm font-medium">
            Duplex
          </label>
          <select
            id="duplexFilter"
            className="block w-full text-left p-2 bg-gray-950 text-white hover:bg-gray-200 hover:text-black"
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            <option value="Duplex,All">All</option>
            <option value="Duplex,Sale">Duplex for Sale</option>
            <option value="Duplex,Rent">Duplex for Rent</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="bungalowFilter" className="block text-sm font-medium">
            Bungalow
          </label>
          <select
            id="bungalowFilter"
            className="block w-full text-left p-2 bg-gray-950 text-white hover:bg-gray-200 hover:text-black"
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            <option value="Bungalow,All">All</option>
            <option value="Bungalow,Sale">Bungalow for Sale</option>
            <option value="Bungalow,Rent">Bungalow for Rent</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="apartmentFilter"
            className="block text-sm font-medium"
          >
            Apartment
          </label>
          <select
            id="apartmentFilter"
            className="block w-full text-left p-2 bg-gray-950 text-white hover:bg-gray-200 hover:text-black"
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            <option value="Apartment,All">All </option>
            <option value="Apartment,Sale">Apartment for Sale</option>
            <option value="Apartment,Rent">Apartment for Rent</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
