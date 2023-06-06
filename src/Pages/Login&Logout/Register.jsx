/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [invalidPass, setInvalidPass] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setInvalidPass(
        "enter uppercase, lowercase, number and special character."
      );
      return;
    }
    createUser(email, password)
      .then(() => {})
      .catch((error) => {
        setError(error);
      });
    form.reset();
  };
  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };
  return (
    <>
      {" "}
      <PageTitle title="register" />
      <div className="Container">
        <div className="md:w-1/2 mx-auto">
          <h2 className="text-2xl py-8 text-[#405a7f]">Please login</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="inline-block mb-2 text-lg">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="enter your full name"
                className="input input-bordered input-info w-full block"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo_URL" className="inline-block mb-2 text-lg">
                Your Photo URL
              </label>
              <input
                type="url"
                name="photo_URL"
                id="photo_URL"
                placeholder="enter your photo url"
                className="input input-bordered input-info w-full block"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="inline-block mb-2 text-lg">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                required
                className="input input-bordered input-info w-full block"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="inline-block mb-2 mt-4 text-lg"
              >
                Your password
              </label>
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="enter your password"
                required
                className="input input-bordered input-info w-full block"
              />
            </div>
            <span
              className="flex items-center mt-3"
              onClick={handleSeePassword}
            >
              <input type="checkbox" className="checkbox me-3" /> see password
            </span>
            {error || invalidPass ? (
              <div className="alert alert-error shadow-lg mt-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error?.message || invalidPass} </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <button type="submit" className="Btn-fill w-full my-5 ">
              Registration
            </button>
          </form>
          <p className="text-lg mb-5">
            Already have an account
            <Link to="/login" className="text-blue-800 underline ms-3">
              please login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
