/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-teal-600">
        <div className="navbar Container flex justify-between  items-center h-20 text-white font-semibold">
          <div>
            <h3 className="text-4xl fw-bold">Cookiteer</h3>
          </div>
          <nav>
            <div className="text-xl text-end md:hidden">
              <span
                className="inline-block "
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen === true ? <HiX /> : <HiMenu />}
              </span>
            </div>
            <div
              className={`md:flex items-center gap-4 duration-700 bg-teal-600 ${
                isOpen
                  ? "absolute md:static top-20 end-0 p-4 text-center space-y-5"
                  : "absolute md:static top-20 -end-32 p-4 text-center "
              }`}
            >
              <Link to="/" className="block md:flex">
                Home
              </Link>
              <Link to="/allToys" className="block md:flex">
                All Toys
              </Link>
              <Link to="/myToys" className="block md:flex">
                My Toys
              </Link>
              <Link to="/addToy" className="block md:flex">
                Add A Toys
              </Link>
              <Link to="/blog" className="block md:flex">
                Blog
              </Link>
              {user ? (
                <>
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      className="w-14 h-14 rounded-full"
                      title={user?.displayName}
                    />
                  ) : (
                    <p className="text-white uppercase bg-lime-900 py-3 px-5 rounded-full">
                      {user.email.slice(0, 1)}
                    </p>
                  )}

                  <Link to="/login" onClick={handleLogout}>
                    <button className="bg-lime-900 text-white px-5 py-2">
                      Logout
                    </button>
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <button className="bg-lime-900 text-white px-5 py-2 rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
