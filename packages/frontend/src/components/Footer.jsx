import React from "react";
import {
  FaEnvelope,
  FaMapMarker,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo1 from "../assets/img/opulent.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-20 px-4 md:px-0">
        <div className="logo col-span-1 max-[450px]:block md:col-span-1">
          <div className="flex items-center mb-4 lg:ml-[-3.6vw] lg:w-[30vw]">
            <img src={logo1} alt="Logo" width="35" className="mr-3" />
            <h3 className="text-lg font-semibold">Opulent Signature Homes</h3>
          </div>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis
            neque aut ipsa, in magni laudantium nostrum! Cumque, voluptas ea!
          </p>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="about ml-[0.5rem]">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>How It Works</li>
            <li>Customers</li>
            <li>Our Story</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="support">
          <h3 className="text-lg font-semibold mb-4">Support & Summary</h3>
          <ul className="space-y-2 text-sm">
            <li>Question</li>
            <li>Helping Center</li>
            <li>Privacy & Policy</li>
            <li>Properties</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <div className="contact-icon mr-3">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <h4>youremail@gmail.com</h4>
              </div>
            </li>
            <li className="flex items-center">
              <div className="contact-icon mr-3">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Contact</h4>
                <h4>09087678765</h4>
              </div>
            </li>
            <li className="flex items-center">
              <div className="contact-icon mr-3">
                <FaMapMarker />
              </div>
              <div>
                <h4>Location</h4>
                <h4>Your Address Here</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8 max-[450px]:block">
        <p className="mb-2 text-sm">
          &copy; 2024 Opulent Signature Homes. All rights reserved
        </p>
        <p className="text-sm">Terms and conditions apply</p>
      </div>
    </footer>
  );
};

export default Footer;
