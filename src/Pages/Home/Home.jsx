/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "./Slider";
import Toys from "../Home/Toys/Toys";
import ToyGallery from "../ToyGellary/ToyGallery";

const Home = () => {
  return (
    <>
      <Slider />
      <ToyGallery />
      <Toys />
    </>
  );
};

export default Home;
