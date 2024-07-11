import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PropertyRow from "../components/PropertyRow";
import AboutUs from "../components/AboutUs";
import HowItWorks from "../components/HowItWorks";
import WhatWeOffer from "../components/WhatWeOffer";
import LiveWithUs from "../components/LiveWithUs";
import TakeAction from "../components/TakeAction";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <PropertyRow />
      <AboutUs />
      <HowItWorks />
      <WhatWeOffer />
      <LiveWithUs />
      <Faq />
      <TakeAction />
      <Footer />
    </div>
  );
};

export default Home;
