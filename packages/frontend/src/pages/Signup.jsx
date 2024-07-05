import React from "react";
import login from "../assets/img/login.png";
import { motion } from "framer-motion";
import opulent from "../assets/img/opulent.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        amount: "all",
      }}
    >
      <img src={login} className="absolute w-[100vw] h-[100vh]" alt="" />
      <div className="text-white relative">
        <img
          src={opulent}
          className="w-[6rem] absolute z-20 ml-[-2.4vw]"
          alt=""
        />
        <h1 className="text-center text-[1.5rem] font-bold pt-[15vh]">
          Sign up
        </h1>

        <div className="p-6 max-[450px]:mt-[1rem] rounded-lg shadow-xl">
          <form>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Phone number"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
            <p className="mt-2 flex gap-2">
              Already have an account?{" "}
              <Link
                className="font-semibold text-[#FC2469] bg-black bg-opacity-60 px-1 py-[0.1rem]"
                to="/login"
              >
                Log in
              </Link>
            </p>
            <button
              className="w-full py-2 mt-5 bg-[#FC2469] text-white font-semibold transition rounded hover:bg-[#cc255a]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
