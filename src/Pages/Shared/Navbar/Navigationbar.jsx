/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "./../../../assets/logo.svg";

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-base-200">
        <div className="navbar Container flex justify-between  items-center h-20 text-white font-semibold">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
              className={`md:flex items-center gap-4 z-50 duration-700 bg-base-200 ${
                isOpen
                  ? "absolute md:static top-20 end-0 p-2 text-center space-y-5"
                  : "absolute md:static top-20 -end-32 p-2 text-center "
              }`}
            >
              <Link
                to="/"
                className="block md:flex text-[#405a7f] hover:text-[#f99] duration-300"
              >
                Home
              </Link>
              <Link
                to="/allToys"
                className="block md:flex text-[#405a7f] hover:text-[#f99] duration-300"
              >
                All Toys
              </Link>
              {user && (
                <>
                  <Link
                    to="/orders"
                    className="block md:flex text-[#405a7f] hover:text-[#f99] duration-300"
                  >
                    My Toys
                  </Link>
                  <Link
                    to="/addToy"
                    className="block md:flex text-[#405a7f] hover:text-[#f99] duration-300"
                  >
                    Add a toy
                  </Link>
                </>
              )}
              <Link
                to="/blog"
                className="block md:flex text-[#405a7f] hover:text-[#f99] duration-300"
              >
                Blog
              </Link>

              {user ? (
                <>
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      className="w-14 h-14 rounded-full "
                      title={user?.displayName}
                    />
                  ) : (
                    <p
                      className="text-white uppercase bg-lime-900 py-3 px-5 rounded-full"
                      title={user?.displayName}
                    >
                      {user.email.slice(0, 1)}
                    </p>
                  )}

                  <Link to="/login" onClick={handleLogout}>
                    <button className="Btn-fill">Logout</button>
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <button className="Btn-fill">Login</button>
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
