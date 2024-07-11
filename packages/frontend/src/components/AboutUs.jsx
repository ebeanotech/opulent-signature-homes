import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import personLogo1 from "../assets/img/person-logo1.jpeg";

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="md:max-w-[90%] max-w-[100%] mx-auto pt-12 pb-10 md:pb-20 mt-16 md:px-9 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-2xl md:text-3xl border-b-2 border-gray-400 w-28 md:w-[8.7rem] font-semibold mx-auto">
          <span className="text-blue-600">About</span> Us
        </h2>

        <div className="md:flex mt-10 md:mt-16 gap-16">
          <div className="about-img">
            <img
              src={personLogo1}
              alt=""
              className="w-64 md:w-[25rem] rounded-md shadow-xl hover:shadow-2xl mx-auto md:mt-[-2rem]"
            />
          </div>
          <div className="about-text w-80 md:w-96 mt-8 md:mt-0 mx-auto pl-0 md:pl-2">
            <h1 className="text-lg md:text-2xl max-[450px]:pl-1 font-semibold">
              We Are The Best And Trusted{" "}
              <span className="text-blue-600">Real Estate</span> Company
            </h1>
            <p className="mt-3 max-[450px]:pl-1">
              Lorem ipsum, dolor sit amet Quasi et asperiores quidem, eius
              maiores inventore facilis repudiandae.
            </p>

            <ul className="pt-4 space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-blue-600 bg-blue-100 rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-blue-600 bg-blue-100 rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-blue-600 bg-blue-100 rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* End About Section */}
    </div>
  );
};

export default AboutUs;
