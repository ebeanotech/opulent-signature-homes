import React from "react";
import Typewriter from "typewriter-effect";
import headerImg from "../assets/img/headerimg.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          amount: "all",
        }}
        className="grid grid-cols-1 md:grid-cols-2 pt-[9vh] rounded-2xl text-black lg:w-[96vw] w-[100vw] lg:ml-5 ml-0 h-[75vh] mt-[15vh] max-[450px]:mt-[13vh] pl-[2.3%] pr-[3.7%] bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]"
      >
        <div className="header-text md:pt-6 pt-[22vh]">
          <h1 className="lg:text-[1.5rem] font-semibold">
            Welcome <span className="text-blue-600">User</span>
          </h1>
          <h1 className="lg:text-[2.7rem] text-[1.5rem] mt-2 font-bold md:w-[28rem]">
            <Typewriter
              options={{
                strings: [
                  "Explore Properties.",
                  "Purchase Properties.",
                  "Rent Properties.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 70,
              }}
            />
          </h1>
          <p className="mt-4 md:pr-[8rem] font-semibold text-[1.05rem]">
            Everything you need at your disposal. Supermarket, bus stations,
            24hrs electricity and so much more
          </p>

          <div>
            <form className="md:mt-10 mt-9">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="md:py-[1.2rem] py-[0.8rem] rounded-3xl md:px-8 px-4"
              />
              <button
                type="submit"
                className="md:py-[1.1rem] bg-gray-900 py-[0.75rem] absolute md:ml-[-2.1rem] ml-[-2rem] text-white px-5 lg:px-8 rounded-3xl"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
        <div className="header-img md:w-[90%]">
          <motion.img
            initial={{
              translateX: 100,
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              amount: "all",
            }}
            src={headerImg}
            className="md:w-[48%] w-[74%] absolute max-[450px]:top-0 mt-[15vh] ml-[22vw] md:mt-[-6vh] md:ml-[-2.6vw]"
            alt=""
          />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
