import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PageTitle from "../PageTitle/PageTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy_name = form.toyName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const seller_name = form.seller_name.value;
    const picture = form.picture.value;
    const quantity = form.quantity.value;
    const email = form.email.value;
    const toy_description = form.toy_description.value;
    const newProduct = {
      toy_name,
      category,
      price,
      rating,
      seller_name,
      picture,
      quantity,
      email,
      toy_description,
    };
    fetch("https://assinment-elevent-server-mrana565.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  return (
    <>
      <PageTitle title="add-toy" />
      <div className="Container  mb-12">
        <h2 className="text-center text-[#405a7f] text-2xl font-bold py-10">
          Your Added Toy
        </h2>
        <div className=" text-center">
          <form onSubmit={handleAddToy} className="w-full lg:flex flex-wrap">
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="toyName">Toy Name</label>
              <input
                type="text"
                name="toyName"
                id="toyName"
                placeholder="your toy name"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="category">Category Name</label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="category name"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="price"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="rating"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="seller_name">Seller Name</label>
              <input
                type="text"
                name="seller_name"
                id="seller_name"
                placeholder="your shop name"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="email">Seller E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user.email}
                readOnly
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="picture">Picture URL</label>
              <input
                type="url"
                name="picture"
                id="picture"
                placeholder="toy picture url"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="quantity"
                required
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2 basis-1/2 mb-5 mx-auto">
              <label htmlFor="toy_description">Description</label>

              <textarea
                name="toy_description"
                id="toy_description"
                required
                placeholder="toy description"
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-7xl h-52"
              ></textarea>
            </div>
            <button type="submit" className="Btn-fill w-full my-5 ">
              Add Toy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToys;
