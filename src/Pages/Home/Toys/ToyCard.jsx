import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, rating, picture, price, toy_name } = toy;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl mx-auto">
        <figure>
          <img className="w-full h-80" src={picture} alt="Toy image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p className="text-xl">
            Price : <span className="text-[#405a7f]">${price}</span>
          </p>
          <div className="card-actions justify-between items-center">
            <p className="text-xl">
              Rating : <span className="text-yellow-400">{rating}</span>
            </p>
            <div>
              <Link to={`/toyDetails/${_id}`} className="Btn-fill">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
