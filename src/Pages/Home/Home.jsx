/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "./Slider";
import Toys from "../Home/Toys/Toys";
import ToyGallery from "../ToyGellary/ToyGallery";
import PageTitle from "../PageTitle/PageTitle";
import Service from "./service";
import Offer from "./Offer";

const Home = () => {
  return (
    <>
      <PageTitle title="home" />
      <Slider />
      <ToyGallery />
      <Service />
      <Toys />
      <Offer />
    </>
  );
};

export default Home;
