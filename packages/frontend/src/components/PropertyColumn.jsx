import React from "react";
import { FaLocationDot, FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PropertyColumn = ({ img }) => {
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
      className="text-left rounded-lg shadow-lg mx-auto lg:w-[80%] w-[86%] py-3 px-1 hover:shadow-2xl"
    >
      <div>
        <img
          src={img}
          alt=""
          className="w-full h-[13rem] object-cover rounded"
        />
      </div>
      <div className="flex justify-between mt-3 px-3">
        <h3>6 Bedroom duplex</h3>
        <p className="text-blue-600 text-xs font-semibold">For Sale</p>
      </div>
      <h3 className="flex gap-1 ml-2 mt-1 text-gray-500 text-sm items-center">
        <FaLocationDot /> 21 Steven Strange Str Lagos
      </h3>
      <div className="flex justify-between mt-3 px-3 items-center">
        <div className="text-yellow-500 text-sm">
          <Link to={"/property-info"}>
            <button className="bg-blue-600 text-white py-2 px-3 text-[0.8rem] rounded-lg">
              More Info
            </button>
          </Link>
        </div>

        <div>
          <h3 className="flex gap-1 items-center text-sm">
            <FaNairaSign /> 120,000,000
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyColumn;
