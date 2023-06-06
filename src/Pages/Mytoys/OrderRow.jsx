import Swal from "sweetalert2";

const OrderRow = ({ order }) => {
  const { _id, rating, picture, price, toy_name, seller_name } = order;

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your added toy has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
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
        <button className="Btn-fill">update</button>
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
