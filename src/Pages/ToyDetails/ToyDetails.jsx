import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ToyDetails = () => {
  const navigate = useNavigate();
  const toy = useLoaderData();
  const {
    rating,
    picture,
    price,
    toy_name,
    toy_description,
    email,
    category,
    quantity,
    seller_name,
  } = toy;

  return (
    <>
      <h2 className="text-3xl text-[#405a7f] font-bold  text-center py-10">
        <span className="text-[#f99]">{toy_name}</span> Details
      </h2>
      <div className="Container my-12 card card-compact w-full lg-w-1/2 bg-base-100 shadow-2xl ">
        <figure>
          <img className="w-full h-auto" src={picture} alt="Toy image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p>{toy_description}</p>
          <p className="text-xl">
            Price : <span className="text-orange-400">${price}</span>
          </p>
          <div className="card-actions justify-between items-center">
            <p className="text-yellow-400 text-xl font-bold">
              Rating : {rating}
            </p>
            <Link onClick={() => navigate(-1)} className="Btn-fill  end-3">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
