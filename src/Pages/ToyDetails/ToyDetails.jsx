import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { _id, rating, picture, price, toy_name, toy_description } = toy;
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
            <Link to={`/myToys/${_id}`} className="Btn-fill  end-3">
              Add Toy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
