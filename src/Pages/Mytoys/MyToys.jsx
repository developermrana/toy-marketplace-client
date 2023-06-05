import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const MyToys = () => {
  const loadedToys = useLoaderData();

  console.log(loadedToys);
  let toys;

  if (loadedToys.length > 20) {
    toys = loadedToys.slice(0, 20);
  } else {
    toys = loadedToys;
  }

  return (
    <>
      <h2 className="text-center text-2xl font-bold py-10">
        Your Favorite Toy
      </h2>

      <div className="overflow-x-auto">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
