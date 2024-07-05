import React, { useState } from "react";
import login from "../assets/img/login.png";
import { motion } from "framer-motion";
import opulent from "../assets/img/opulent.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

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
          className="w-[6rem] md:w-[8rem] absolute z-20 ml-[-2.4vw] md:ml-0"
          alt=""
        />
        <h1 className="text-center text-[1.5rem] md:text-[1.8rem] font-bold pt-[18vh] md:pt-[27vh]">
          Login
        </h1>

        {!isFormVisible ? (
          <div className="mt-12 md:mt-16">
            <Link to={"/home"}>
              <button
                className="w-[80%] md:w-[40%] ml-[10%] py-2 mt-5 bg-[#FC2469] text-white font-semibold rounded transition hover:bg-[#cc255a]"
                type="submit"
              >
                Guest Login
              </button>
            </Link>
            <button
              className="w-[80%] md:w-[40%] ml-[10%] md:ml-[1.4rem] py-2 mt-5 bg-[#FC2469] text-white font-semibold rounded transition hover:bg-[#cc255a]"
              type="submit"
              onClick={() => setIsFormVisible(true)}
            >
              User Login
            </button>
          </div>
        ) : (
          <motion.div
            initial={{
              translateX: -100,
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
            className="p-6 max-[450px]:mt-[3.6rem] rounded-lg shadow-xl"
          >
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
              />
              <p className="mt-2 flex gap-2 ml-1">
                Don't have an account?{" "}
                <Link className="font-semibold text-[#FC2469]" to="/signup">
                  Sign up
                </Link>
              </p>
              <button
                className="w-[80%] ml-[10%] py-2 mt-5 bg-[#FC2469] text-white font-semibold rounded transition hover:bg-[#cc255a]"
                type="submit"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
