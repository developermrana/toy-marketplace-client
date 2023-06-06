import { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addedToys, setAddedToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const addedToys = data.filter((toy) => toy.email === user.email);
        setAddedToys(addedToys);
      });
  }, [addedToys]);

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
        fetch(`http://localhost:5000/products/${id}`, {
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
    <>
      <h2 className="text-center text-[#405a7f] text-2xl font-bold py-10">
        Your Added Toy
      </h2>

      {addedToys.length > 0 ? (
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
              {addedToys.map((addedToy) => (
                <MyToyRow
                  key={addedToy._id}
                  addedToy={addedToy}
                  handleOrderDelete={handleOrderDelete}
                ></MyToyRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-2xl text-center text-[#405a7f]">
          You did not add Toys
        </h2>
      )}
    </>
  );
};

export default MyToys;
