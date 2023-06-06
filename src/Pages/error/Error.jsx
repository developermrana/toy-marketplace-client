import { Link } from "react-router-dom";
import errorImg from "../../assets/error.png";
const Error = () => {
  return (
    <div className="w-full h-screen bg-[url] flex items-center justify-center flex-col">
      <img
        className="w-full h-full md:w-[700px] md:h-[500px] block"
        src={errorImg}
        alt="error image"
      />

      <Link to="/">
        <button className="Btn">Go to back Home</button>
      </Link>
    </div>
  );
};

export default Error;
