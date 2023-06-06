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
        <Link to="/" className="link link-hover hover:text-[#f99]">
          Home
        </Link>
        <Link to="/allToys" className="link link-hover hover:text-[#f99]">
          All Toys
        </Link>
        <Link to="/myToys" className="link link-hover hover:text-[#f99]">
          My Toys
        </Link>
        <Link to="/addToy" className="link link-hover hover:text-[#f99]">
          Add A Toy
        </Link>
        <Link to="/blog" className="link link-hover hover:text-[#f99]">
          Blogs
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            className="text-3xl text-[#f99] hover:text-[#405a7f] hover:scale-150 duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            className="text-3xl text-[#f99] hover:text-[#405a7f] hover:scale-150 duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.youtube.com/"
            target="_blank"
            className="text-3xl text-[#f99] hover:text-[#405a7f] hover:scale-150 duration-300"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.twitter.com/"
            target="_blank"
            className="text-3xl text-[#f99] hover:text-[#405a7f] hover:scale-150 duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
            className="text-3xl text-[#f99] hover:text-[#405a7f] hover:scale-150 duration-300"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Masud Rana</p>
      </div>
    </footer>
  );
};

export default Footers;
