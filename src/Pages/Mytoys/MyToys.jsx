import { useEffect, useState } from "react";
import OrderRow from "./OrderRow";

const MyToys = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);
  return (
    <>
      <h2 className="text-center text-[#405a7f] text-2xl font-bold py-10">
        Your Added Toy
      </h2>

      {orders.length > 0 ? (
        <div className="overflow-x-auto  Container my-12">
          <table className="table mx-auto w-auto">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Image and Name</th>
                <th>rating</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  // handleOrderDelete={handleOrderDelete}
                  // handleConfirm={handleConfirm}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-2xl text-center text-[#405a7f]">No Orders</h2>
      )}
    </>
  );
};

export default MyToys;
