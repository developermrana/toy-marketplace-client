/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Navigationbar from "../Pages/Shared/Navbar/Navigationbar";
import Footers from "../Pages/Shared/Footer/Footers";

const Main = () => {
  return (
    <div>
      <Navigationbar />
      <Outlet />
      <Footers />
    </div>
  );
};

export default Main;
