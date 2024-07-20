import React from "react";
import duplex1 from "../assets/img/duplex1.JPG";
import duplex2 from "../assets/img/duplex2.JPG";
import duplex3 from "../assets/img/duplex3.JPG";
import duplex4 from "../assets/img/duplex4.JPG";
import bungalo1 from "../assets/img/bongalo1.JPG";
import bungalo2 from "../assets/img/bongalo2.JPG";
import PropertyColumn from "./PropertyColumn";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

// Featured component to display featured properties
const PropertyRow = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 2,
      }}
      className="mt-20 pb-16 pt-4 w-full px-4"
    >
      {/* Section heading */}
      <span className="flex">
        <h2 className="text-xl text-left md:text-2xl border-b-2 border-gray-400 w-[11.6rem] lg:w-[14.3rem] mb-12 font-semibold ml-auto">
          Featured <span className="text-blue-600">Properties</span>
        </h2>
        <FaFire className="text-yellow-400 mr-auto mt-[0.25rem] text-[1.4rem] animate-pulse" />
      </span>

      {/* Grid layout for featured properties */}
      <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-5 w-[90%] mx-auto text-center">
        {/* Featured Property 1 */}
        <PropertyColumn
          img={duplex1}
          name={"duplex 1"}
          price={"230,000,000"}
          location={"Lagos"}
          condition={"sale"}
        />

        {/* Featured Property 2 */}
        <PropertyColumn
          img={bungalo1}
          name={"duplex 1"}
          price={"50,000,000"}
          location={"Lagos"}
          condition={"rent"}
        />

        {/* Featured Property 3 */}
        <PropertyColumn
          img={duplex3}
          name={"duplex 1"}
          price={"80,000,000"}
          location={"Lagos"}
          condition={"sale"}
        />

        {/* Featured Property 4 */}
        <PropertyColumn
          img={duplex2}
          name={"duplex 1"}
          price={"300,000,000"}
          location={"Lagos"}
          condition={"rent"}
        />

        {/* Featured Property 5 */}
        <PropertyColumn
          img={bungalo2}
          name={"duplex 1"}
          price={"35,000,000"}
          location={"Lagos"}
          condition={"sale"}
        />

        {/* Featured Property 6 */}
        <PropertyColumn
          img={duplex4}
          name={"duplex 1"}
          price={"95,000,000"}
          location={"Lagos"}
          condition={"rent"}
        />
      </div>
    </motion.div>
  );
};

export default PropertyRow;
