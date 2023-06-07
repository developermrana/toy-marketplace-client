import { useLoaderData } from "react-router-dom";
import ToyRow from "../AllToys/ToyRow";
import PageTitle from "../PageTitle/PageTitle";
import { useState } from "react";

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [search, setSearch] = useState("");

  let toys;

  if (loadedToys.length > 20) {
    toys = loadedToys.slice(0, 20);
  } else {
    toys = loadedToys;
  }
  return (
    <>
      <PageTitle title="all-toys" />
      <h2 className="text-center text-[#405a7f] text-2xl font-bold py-10">
        All Toys
      </h2>
      <form className="text-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search toy name"
          className="input input-bordered input-secondary w-full max-w-xs mb-5"
        />
      </form>
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
            {toys
              .filter((toy) => {
                return search.toLowerCase() === ""
                  ? toy
                  : toy.toy_name.toLowerCase().includes(search);
              })
              .map((toy) => (
                <ToyRow key={toy._id} toy={toy} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
