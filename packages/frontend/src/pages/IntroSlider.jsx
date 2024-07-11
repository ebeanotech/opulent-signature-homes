import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import slide1 from "../assets/img/home.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import { Link } from "react-router-dom";
import opulent from "../assets/img/opulent.png";

const IntroSlider = () => {
  const [isSliderShown, setIsSliderShown] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const totalSlides = 3; // Total number of slides
  const navigate = useNavigate();

  const goToNextSlide = () => {
    if (swiper !== null) {
      if (swiper.activeIndex < totalSlides - 1) {
        swiper.slideNext();
      } else {
        // Handle navigation to login page on last slide
        console.log("Navigate to login page");
      }
    }
  };

  let sliderShown = sessionStorage.getItem("sliderShown");
  if (sliderShown) {
    navigate("/login");
  }

  const setSliderShown = () => {
    setIsSliderShown(true);

    sessionStorage.setItem("sliderShown", isSliderShown);
  };

  return (
    <div>
      {isSliderShown ? (
        navigate("/login")
      ) : (
        <Swiper
          navigation={false} // Hide default navigation arrows
          pagination={true}
          onSwiper={setSwiper}
          modules={[Pagination]}
        >
          <SwiperSlide className="relative">
            <div className="absolute z-20 ml-[-4.4vw] md:ml-[-1vw] md:pt-[1vw] flex">
              <img src={opulent} className="w-[6rem] md:w-[8rem]" alt="" />
              <h1 className="text-white pt-6 md:pt-8 font-bold text-[1.2rem] md:text-[1.7rem] max-[360px]:ml-[1.8vw] ml-[2vw] md:ml-[16vw] lg:ml-[28vw] border-b border-blue-600 h-[3.6rem] md:h-[4.8rem]">
                Opulent Signature Homes
              </h1>
            </div>
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-[100vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
              <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[16rem] md:mt-[-8vh]">
                <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                  Your Gateway to Premium Real Estate
                </h2>
                <p className="text-[1rem] md:text-[1.4rem] mt-5 md:mt-[1.55rem]">
                  Explore exclusive properties tailored to your lifestyle.
                  Discover elegance and comfort in every detail.
                </p>
                <button
                  onClick={goToNextSlide}
                  className="mt-11 px-8 md:px-[2.8rem] md:text-[1.4rem] py-3 md:py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
                >
                  {swiper && swiper.activeIndex === totalSlides - 1
                    ? "Log In"
                    : "Next"}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute z-20 ml-[-4.4vw] md:ml-[-1vw] md:pt-[1vw] flex">
              <img src={opulent} className="w-[6rem] md:w-[8rem]" alt="" />
              <h1 className="text-white pt-6 md:pt-8 font-bold text-[1.2rem] md:text-[1.7rem] max-[360px]:ml-[1.8vw] ml-[2vw] md:ml-[16vw] lg:ml-[28vw] border-b border-blue-600 h-[3.6rem] md:h-[4.8rem]">
                Opulent Signature Homes
              </h1>
            </div>
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-[100vh] object-cover md:object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
              <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[16rem] md:mt-[-8vh]">
                <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                  Discover Your Perfect Home
                </h2>
                <p className="text-[1rem] md:text-[1.4rem] mt-5 md:mt-[1.55rem]">
                  From cozy apartments to luxurious estates, find a place that
                  reflects your aspirations. Explore our diverse range of
                  properties.
                </p>
                <button
                  onClick={goToNextSlide}
                  className="mt-11 px-8 md:px-[2.8rem] md:text-[1.4rem] py-3 md:py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
                >
                  {swiper && swiper.activeIndex === totalSlides - 1
                    ? "Log In"
                    : "Next"}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute z-20 ml-[-4.4vw] md:ml-[-1vw] md:pt-[1vw] flex">
              <img src={opulent} className="w-[6rem] md:w-[8rem]" alt="" />
              <h1 className="text-white pt-6 md:pt-8 font-bold text-[1.2rem] md:text-[1.7rem] max-[360px]:ml-[1.8vw] ml-[2vw] md:ml-[16vw] lg:ml-[28vw] border-b border-blue-600 h-[3.6rem] md:h-[4.8rem]">
                Opulent Signature Homes
              </h1>
            </div>
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-[100vh] object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
              <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[16rem] md:mt-[-8vh]">
                <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                  Let's Find Your Dream Home
                </h2>
                <p className="text-[1rem] md:text-[1.4rem] mt-5 md:mt-[1.55rem]">
                  Begin your journey towards homeownership. Our expert team is
                  here to guide you every step of the way.
                </p>
                <Link to={"/login"}>
                  <button
                    onClick={setSliderShown}
                    className="mt-11 px-8 md:px-[2.8rem] md:text-[1.4rem] py-3 md:py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default IntroSlider;
