import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Container mb-14">
      <div className="text-center py-10">
        <h3 className="text-xl text-[#f99] ">Offer For You</h3>
        <h2 className="text-3xl text-[#405a7f] font-bold">
          Who are waiting for you?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 ">
        <div
          className="bg-[url('https://i.ibb.co/dMCx5K0/offer2.webp')] p-20 pl-10 space-y-3 rounded-xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl text-white font-extrabold">Get 10% Off</h2>
          <p className="text-white text-lg font-bold">
            Contrary to popular belief
          </p>
          <button className="Btn-fill">Shop Now</button>
        </div>
        <div
          className="bg-[url('https://i.ibb.co/BZxgm06/offer1.webp')] p-20 pl-10 space-y-3 rounded-xl"
          data-aos="flip-up"
        >
          <h2 className="text-3xl text-white font-extrabold">
            Buy one Get one
          </h2>
          <p className="text-white text-lg font-bold">
            Contrary to popular belief
          </p>
          <button className="Btn-fill">Shop Now</button>
        </div>
        <div
          className="bg-[url('https://i.ibb.co/dMCx5K0/offer2.webp')] p-20 pl-10 space-y-3 rounded-xl"
          data-aos="fade-left"
        >
          <h2 className="text-3xl text-white font-extrabold">Black Friday</h2>
          <p className="text-white text-lg font-bold">
            Contrary to popular belief
          </p>
          <button className="Btn-fill">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
