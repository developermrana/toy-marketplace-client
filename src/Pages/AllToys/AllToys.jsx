import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <>
      <div className="bg-base-200 ">
        <h2 className="text-3xl font-bold  text-center py-10">
          Bye Your Favorite Toys
        </h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 Container">
          {allToys.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllToys;
