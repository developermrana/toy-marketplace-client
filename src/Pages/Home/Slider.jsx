/* eslint-disable no-unused-vars */
import React from "react";
import sliderImg1 from "./../../assets/slider-images/slider1.jpg";
import sliderImg2 from "./../../assets/slider-images/slider2.jpg";
import sliderImg3 from "./../../assets/slider-images/slider3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay
      infiniteLoop
      className=" flex justify-center items-center flex-col"
    >
      <div className="">
        <img
          src={sliderImg1}
          className="w-full h-full max-h-[540px] object-cover"
          alt="slider img"
        />
        <h1 className="legend">
          <span className="text-2xl text-white hover:text-orange-500">
            We are GLOBAL seller
          </span>
        </h1>
      </div>
      <div>
        <img
          src={sliderImg2}
          className="w-full h-full max-h-[540px] object-cover "
          alt="slider img"
        />
        <p className="legend">
          <span className="text-2xl text-white hover:text-orange-500">
            Bye your favorite toys
          </span>
        </p>
      </div>
      <div>
        <img
          src={sliderImg3}
          className="w-full h-full max-h-[540px] object-cover "
          alt="slider img"
        />
        <p className="legend">
          <span className="text-2xl text-white hover:text-orange-500">
            We are delivery first
          </span>
        </p>
      </div>
    </Carousel>
  );
};

export default Slider;
