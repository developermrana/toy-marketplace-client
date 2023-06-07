import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../PageTitle/PageTitle";

const UpdateToy = () => {
  const loadedToy = useLoaderData();

  const {
    _id,
    toy_name,
    category,
    price,
    rating,
    seller_name,
    picture,
    quantity,
    email,
    toy_description,
  } = loadedToy;
  const handleUpdate = (e) => {
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
    const UpdatedProduct = {
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
    fetch(
      `https://assinment-elevent-server-mrana565.vercel.app/products/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(UpdatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy has been update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  return (
    <>
      <PageTitle title="update-toy" />
      <div className="Container  mb-12">
        <h2 className="text-center text-[#405a7f] text-2xl font-bold py-10">
          Your Added Toy
        </h2>
        <div className=" text-center">
          <form onSubmit={handleUpdate} className="w-full lg:flex flex-wrap">
            <div className="flex flex-col gap-2 basis-1/2 mb-5">
              <label htmlFor="toyName">Toy Name</label>
              <input
                type="text"
                name="toyName"
                id="toyName"
                defaultValue={toy_name}
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
                defaultValue={category}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={seller_name}
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
                defaultValue={email}
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
                defaultValue={picture}
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
                defaultValue={quantity}
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
                defaultValue={toy_description}
                className="block py-2 px-3 border-[#f99] border-2 rounded-md mx-auto w-full max-w-7xl h-52"
              ></textarea>
            </div>
            <button type="submit" className="Btn-fill w-full my-5 ">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
