/* eslint-disable no-unused-vars */

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="home" className="link link-hover">
          Home
        </Link>
        <Link to="allToys" className="link link-hover">
          All Toys
        </Link>
        <Link to="myToys" className="link link-hover">
          My Toys
        </Link>
        <Link to="addToy" className="link link-hover">
          Add A Toy
        </Link>
        <Link to="blogs" className="link link-hover">
          Blogs
        </Link>
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
