import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const toy = useLoaderData();
  const { picture, price, toy_name } = toy;
  return (
    <>
      <h2 className="text-center text-2xl font-bold py-10">
        Your Favorite Toy
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Image</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div></div>
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24">
                    <img src={picture} alt="Toy image" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{toy_name}</div>
                </div>
              </td>
              <td>{price}</td>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
