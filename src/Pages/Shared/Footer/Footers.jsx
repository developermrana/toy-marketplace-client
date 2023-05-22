/* eslint-disable no-unused-vars */

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a to="home" className="link link-hover">
          Home
        </a>
        <a to="allToys" className="link link-hover">
          All Toys
        </a>
        <a to="myToys" className="link link-hover">
          My Toys
        </a>
        <a to="addToy" className="link link-hover">
          Add A Toy
        </a>
        <a to="blogs" className="link link-hover">
          Blogs
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="text-3xl">
            <FaFacebook />
          </a>
          <a className="text-3xl">
            <FaInstagram />
          </a>
          <a className="text-3xl">
            <FaYoutube />
          </a>
          <a className="text-3xl">
            <FaTwitter />
          </a>
          <a className="text-3xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Masud Rana</p>
      </div>
    </footer>
  );
};

export default Footers;
