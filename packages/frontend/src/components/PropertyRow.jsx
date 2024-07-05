import React from "react";
import duplex1 from "../assets/img/duplex1.JPG";
import duplex2 from "../assets/img/duplex2.JPG";
import duplex3 from "../assets/img/duplex3.JPG";
import PropertyColumn from "./PropertyColumn";
import { FaFire } from "react-icons/fa";

// Featured component to display featured properties
const PropertyRow = () => {
  return (
    <div className="mt-20 pb-20 pt-4 w-full px-4">
      {/* Section heading */}
      <span className="flex">
        <h2 className="text-xl text-left md:text-2xl border-b-2 border-gray-400 w-[11.6rem] lg:w-[14.3rem] mb-12 font-semibold ml-12">
          Featured <span className="text-blue-600">Properties</span>
        </h2>
        <FaFire className="text-yellow-400 mt-[0.25rem] text-[1.4rem] animate-pulse" />
      </span>

      {/* Grid layout for featured properties */}
      <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-5 w-full lg:ml-[4%] mx-auto text-center">
        {/* Featured Property 1 */}
        <PropertyColumn img={duplex1} />

        {/* Featured Property 2 */}
        <PropertyColumn img={duplex2} />

        {/* Featured Property 3 */}
        <PropertyColumn img={duplex3} />
      </div>
    </div>
  );
};

export default PropertyRow;
