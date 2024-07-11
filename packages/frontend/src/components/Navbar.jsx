import React from "react";
import logo1 from "../assets/img/opulent.png";
import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
  // Function to handle the toggle of the navbar in mobile view
  const handleToggle = (e) => {
    console.log("Clicked");

    // Selecting DOM elements for the navbar and lines for the toggle button
    const navbar = document.querySelector(".navbar");
    const firstLine = document.querySelector(".first-line");
    const secondLine = document.querySelector(".second-line");
    const thirdLine = document.querySelector(".third-line");

    // Toggling the rotation class on the lines of the toggle button
    firstLine.classList.toggle("rotate");
    secondLine.classList.toggle("rotate");
    thirdLine.classList.toggle("rotate");

    // Toggling the visibility of the navbar
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      navbar.classList.add("block");
    } else {
      navbar.classList.remove("block");
      navbar.classList.add("hidden");
    }
  };

  return (
    <div className="flex justify-between pr-[5rem] lg:pl-5 pl-2 py-[0.3rem] lg:py-[1rem] bg-gray-50 rounded-lg fixed top-0 lg:w-[96vw] w-[100vw] lg:ml-5 z-50">
      {/* Logo and Title */}
      <div className="lg:z-50">
        <h1 className="text-[1.7rem] text-black max-[900px]:hidden font-bold">
          Opulent Signature Homes
        </h1>
        <Link to={"/"}>
          <img
            src={logo1}
            alt=""
            className="lg:hidden w-[4.3rem] mt-[-0.2rem]"
          />
        </Link>
      </div>

      {/* Mobile navbar toggle button */}
      <div
        onClick={handleToggle}
        className="lg:hidden text-black nav-toggle mt-[0.7rem] mr-[-2.8rem]"
      >
        <div className="first-line"></div>
        <div className="second-line"></div>
        <div className="third-line"></div>
      </div>

      {/* Navbar links */}
      <ul className="hidden max-[900px]:h-[98vh] bg-white text-black max-[900px]:z-20 max-[900px]:p-[1rem] ml-[-0.25rem] lg:ml-[35%] max-[900px]:w-[98vw] lg:bg-transparent mt-[4.5rem] lg:mt-[0rem] fixed navbar lg:flex gap-[3rem] pt-[0.5rem] max-[900px]:absolute">
        <span className="lg:flex gap-[3rem] bg-white lg:py-2 lg:px-6 lg:mt-[-0.6rem] lg:mr-[-1rem] lg:rounded-lg">
          <Link to={"/"}>
            <li className="lg:text-black text-black max-[900px]:mb-[0.6rem] max-[900px]:pt-2 max-[900px]:pb-3 border-b border-gray-700 lg:border-none">
              <a
                className="no-underline hover:text-blue-600 lg:text-black text-black lg:hover:text-blue-600"
                href="#home"
              >
                Home
              </a>
            </li>
          </Link>

          <li className=" lg:text-black text-black max-[900px]:mb-[0.6rem] border-b border-gray-700 lg:border-none">
            <Link to={"/all-properties"}>
              <a
                href="#properties"
                className="no-underline hover:text-blue-600 text-black max-[900px]:pt-2 max-[900px]:pb-3"
              >
                All Properties
              </a>
            </Link>
          </li>

          {/* Dropdown menu for Categories */}
          <li className="max-[900px]:mb-[0.6rem] border-b border-gray-700 lg:border-none">
            <div className="dropdown relative inline-block">
              <button className="dropbtn max-[900px]:text-black max-[900px]:pt-2 max-[900px]:pb-3 text-black lg:hover:text-blue-600 border-none">
                Categories
              </button>
              <div className="dropdown-content hidden bg-[#f1f1f1] min-w-[160px] absolute z-[1] shadow-xl">
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link1
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link2
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link3
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link4
                </a>
              </div>
            </div>
          </li>

          {/* Dropdown menu for About Us */}
          <li className="max-[900px]:mb-[0.8rem] border-b border-gray-700 lg:border-none">
            <div className="dropdown relative inline-block">
              <button className="dropbtn max-[900px]:pt-0 max-[900px]:pb-3 text-black hover:text-blue-600 border-none">
                About Us
              </button>
              <div className="dropdown-content hidden bg-[#f1f1f1] min-w-[160px] absolute z-[1] shadow-xl">
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link1
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link2
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link3
                </a>
                <a
                  className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-blue-600 text-black"
                  href="#home"
                >
                  Link4
                </a>
              </div>
            </div>
          </li>
        </span>
        {/* Login and Register links */}
        <li>
          <div>
            <ul className="block lg:flex gap-[1rem]">
              <li className="max-[900px]:mb-[2rem]">
                <Link to={"/login"}>
                  <a
                    className="lg:bg-white bg-blue-500 text-white lg:text-black px-[1.5rem] py-[0.5rem] max-[900px]:pt-2 max-[900px]:pb-3  no-underline transition rounded hover:bg-blue-600 hover:text-white"
                    href="#login"
                  >
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  <a
                    className="lg:bg-white bg-blue-500 text-white lg:text-black px-[1.5rem] py-[0.5rem] max-[900px]:pt-2 max-[900px]:pb-3  transition no-underline rounded hover:bg-blue-600 hover:text-white"
                    href="#signup"
                  >
                    Register
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
