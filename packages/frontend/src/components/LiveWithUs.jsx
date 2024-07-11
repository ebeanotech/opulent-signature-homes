import React from "react";
import { motion } from "framer-motion";
import vector1 from "../assets/img/Vector 1.png";
import vector2 from "../assets/img/Vector 2.png";
import vector from "../assets/img/Vector.png";

const LiveWithUs = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 py-20"
      >
        <h2 className="text-xl md:text-3xl border-b-2 border-gray-400 w-[19.2rem] md:w-[27.5rem] pl-2 font-semibold mx-auto">
          Why You Should Live With Us
        </h2>
        <h4 className="text-center mt-4">
          We're Here To Satisfy All Your Housing Needs
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center mt-10 gap-4 md:gap-8">
          <div className="w-72 mx-auto md:mb-0 transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector2} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Wide range of properties</h2>
            <p className="text-sm mt-2">
              From Duplexes to bungalos to plots of land, we've got you covered.
            </p>
          </div>

          <div className="w-72 mx-auto md:mb-0 transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector1} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Buy or Rent Homes</h2>
            <p className="text-sm mt-2">
              We offer our residents the opportunity to either rent or purchase
              our smart homes.
            </p>
          </div>

          <div className="w-72 mx-auto transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Trusted by families</h2>
            <p className="text-sm mt-2">
              When you live with us, we offer you nothing but the best.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveWithUs;
