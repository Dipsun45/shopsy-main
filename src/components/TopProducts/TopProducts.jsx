import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669",
    title: "boAt Airdopes 161 True Wireless Earbuds",
    description: "You listen amazing music",
    value: "₹3000",
  },
  {
    id: 2,
    img: "https://in.store.asus.com/media/catalog/product/g/6/g614ju_eclps_gry_4zone_rgb_kbd_1_.jpg",
    title: "ASUS ROG Strix G16 LAPTOP",
    description: "Buy top level gaming laptop",
    value: "₹120000",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o9T1Pu0-NeysEVnTkBtY167945KK_soyDQ&s",
    title: "PS 5 PRO GAMING CONSOLE",
    description: "Play phenomenal games",
    value: "₹50000",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="py-10">

         <div
      id="best-products" ></div>
      <div className="container">
        {/* ✅ Header Centered */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
         Most selling products in our website
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white shadow-xl duration-300 group w-[280px] p-5"
            >
              {/* Image */}
              <div className="flex items-center justify-center h-[180px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-h-[160px] object-contain drop-shadow-lg group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-4">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-lg font-bold">{data.title}</h1>

                <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2 mt-1">
                  {data.description}
                </p>

                {/* ✅ Price Added */}
                <p className="text-lg font-bold text-green-500 mt-2">
                  {data.value}
                </p>

                {/* Button */}
                <button
                  className="bg-primary hover:scale-105 transition duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
