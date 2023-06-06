import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ToyRow = ({ toy }) => {
  const { _id, seller_name, category, price, toy_name, quantity } = toy;
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const redirectPath = user ? `/toyDetails/${_id}` : "/login";

  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Please login first then try again",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  };
  return (
    <>
      <tr className="hover">
        <td>{seller_name}</td>

        <td>{toy_name}</td>

        <td>{category}</td>

        <td>${price}</td>

        <td>{quantity}</td>

        <td>
          <Link
            onClick={() => handleDetails(_id)}
            to={redirectPath}
            className="Btn"
          >
            View Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
