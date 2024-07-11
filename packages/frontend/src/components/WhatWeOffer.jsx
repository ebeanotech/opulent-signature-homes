import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import solar from "../assets/img/solar.jpg";
import smarthome from "../assets/img/smart-home.jpeg";
import security from "../assets/img/security.jpg";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="mt-16 py-20">
        <h2 className="font-semibold text-2xl md:text-3xl flex gap-2 justify-center">
          Our Residents Enjoy{" "}
          <FaLocationDot className="text-blue-600 animate-bounce" />
        </h2>

        <div className="block md:flex justify-center mt-9 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer mb-8 md:mb-0"
          >
            <img
              src={solar}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-[1rem] mt-4 font-semibold text-center">
              24/7 solar generated electricity
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer mb-8 md:mb-0"
          >
            <img
              src={smarthome}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-[1rem] mt-4 font-semibold text-center">
              Smart Home Technology
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer"
          >
            <img
              src={security}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-[1rem] mt-4 font-semibold text-center">
              Top Notch Security.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
