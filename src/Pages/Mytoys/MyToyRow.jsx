import { Link } from "react-router-dom";

const OrderRow = ({ addedToy, handleOrderDelete }) => {
  const { _id, rating, picture, price, toy_name, seller_name } = addedToy;

  return (
    <tr>
      <td>
        <div className="avatar gap-3">
          <div className=" rounded-lg w-24 h-24">
            <img src={picture} alt="Service Img" />
          </div>

          <div>
            <div className="font-bold">{toy_name}</div>
            <div className="text-sm opacity-50">{seller_name}</div>
            <div></div>
          </div>
        </div>
      </td>
      <td>{rating}</td>
      <td>${price}</td>
      <td>
        <Link to={`/products/${_id}`} className="Btn-fill">
          update
        </Link>
      </td>
      <td>
        <button className="Btn-fill" onClick={() => handleOrderDelete(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
