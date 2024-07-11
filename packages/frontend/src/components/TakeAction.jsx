import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import action from "../assets/img/action.jpg";
import action2 from "../assets/img/action2.jpg";

const TakeAction = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 py-12 bg-cover bg-center w-[98.7vw] h-[65vh] md:h-[90vh] relative"
        style={{
          backgroundImage: `url(${action2})`,
        }}
      >
        <div
          className="bg-black w-full h-full opacity-60 absolute top-0 left-0"
          style={{
            zIndex: 1,
          }}
        ></div>
        <div className="relative z-10 mx-auto lg:px-[15.6vw] text-white pt-6 md:pt-12">
          <h2 className="text-xl text-center md:text-[1.7rem] font-semibold mt-8">
            What are you waiting for?
          </h2>
          <p className="text-center mt-2 max-[360px]:px-4">
            Discover your dream home today! Our diverse listings cater to all
            needs and budgets. Let our expert team guide you through a seamless
            buying experience. Act now and turn your dream into reality. Your
            perfect home is just a click away!
          </p>
          <h4 className="text-center mt-4 font-semibold text-blue-500">
            Contact Us!
          </h4>
          <div className="flex justify-center mt-8">
            <Link to={"/all-properties"}>
              <button className="bg-blue-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl hover:bg-blue-800 transition flex items-center gap-2">
                View Properties <FaHome className="animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TakeAction;
