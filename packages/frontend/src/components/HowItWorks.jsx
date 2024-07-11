import React from "react";
import { motion } from "framer-motion";
import steps1 from "../assets/img/steps1.png";
import steps2 from "../assets/img/steps2.png";
import steps3 from "../assets/img/steps3.png";

const HowItWorks = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-20 py-20"
      >
        <h2 className="text-2xl md:text-3xl border-b-2 border-gray-400 w-[9.7rem] md:w-[12rem] font-semibold mx-auto">
          How It <span className="text-blue-600">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center mt-10 gap-5 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps1} alt="" className="mx-auto pl-1 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              1. Search through and select a house of your choice
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps2} alt="" className="mx-auto pl-3 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              2. Book A Physical Tour With One Of Our Reps
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps3} alt="" className="mx-auto pl-8 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              3. Make Payment And Get Your Dream Home.
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
