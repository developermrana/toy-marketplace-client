const ToyCard = ({ toy }) => {
  const { rating, picture, price, toy_name } = toy;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full h-90" src={picture} alt="Toy image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p className="text-xl">
            Price : <span className="text-orange-400">${price}</span>
          </p>
          <div className="card-actions justify-between items-center">
            <p className="text-yellow-400 text-xl font-bold">
              Rating : {rating}
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
