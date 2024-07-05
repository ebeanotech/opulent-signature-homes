import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaNairaSign } from "react-icons/fa6";

const PropertyColumn = ({ img }) => {
  return (
    <div className="text-left rounded-lg shadow-lg lg:w-[80%] py-4 px-1 hover:shadow-2xl">
      <div>
        <img src={img} alt="" className="w-full h-56 object-cover rounded" />
      </div>
      <div className="flex justify-between mt-3 px-3">
        <h3>6 Bedroom duplex</h3>
        <p className="py-1 px-2 bg-blue-600 text-white text-xs font-semibold">
          For Sale
        </p>
      </div>
      <h3 className="flex gap-1 ml-2 mt-1 text-gray-500 text-sm items-center">
        <FaLocationDot /> 21 Steven Strange Str Lagos
      </h3>
      <div className="flex justify-between mt-3 px-3 items-center">
        <div className="flex gap-1 text-yellow-500 text-sm">
          <FaStar className="animate-pulse" />
          <FaStar className="animate-pulse" />
          <FaStar className="animate-pulse" />
          <FaStar className="animate-pulse" />
          <FaStar className="animate-pulse" />
        </div>

        <div>
          <h3 className="flex gap-1 items-center text-sm">
            <FaNairaSign /> 120,000,000
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyColumn;
