import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import slide1 from "../assets/img/home.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import { Link } from "react-router-dom";

const AdvertSlider = () => {
  return (
    <div className="md:px-[20vw] bg-gray-700 w-full">
      <Swiper
        navigation={false} // Hide default navigation arrows
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="relative">
          <img
            src={slide1}
            alt="Slide 1"
            className="md:w-[60vw] w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <div className="absolute md:w-[60vw] inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
            <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[10rem] md:mt-[-8vh]">
              <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                Built by Ebeano Tech
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide2}
            alt="Slide 2"
            className="md:w-[60vw] w-full h-[60vh] md:h-[80vh] object-cover md:object-cover"
          />
          <div className="absolute md:w-[60vw] inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
            <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[10rem] md:mt-[-8vh]">
              <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                Built by Ebeano Tech
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide3}
            alt="Slide 3"
            className="md:w-[60vw] w-full h-[60vh] md:h-[80vh] object-cover"
          />
          <div className="absolute md:w-[60vw] inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
            <div className="slide-content text-center px-5 md:px-[8rem] lg:px-[10rem] md:mt-[-8vh]">
              <h2 className="text-[1.4rem] md:text-[1.9rem] font-bold">
                Built by Ebeano Tech
              </h2>

              <Link to={"/contact"}>
                <button className="mt-11 px-8 md:px-[2.8rem] md:text-[1.4rem] py-3 md:py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertSlider;
