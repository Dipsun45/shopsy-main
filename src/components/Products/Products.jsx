import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669",
    title: "boAt Airdopes 161 True Wireless Earbuds",
    rating: 5.0,
    Value: "3000 ₹",
    color: "Black",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThussNtyip2hzuXRY1weMfl_zZxoJejVRJTQ&s",
    title: "IPHONE 17 PRO MAX",
    rating: 4.5,
    Value: "150000 ₹",
    color: "Orange",
  },
  {
    id: 3,
    img: "https://in.store.asus.com/media/catalog/product/g/6/g614ju_eclps_gry_4zone_rgb_kbd_1_.jpg",
    title: "ASUS ROG Strix G16 LAPTOP",
    rating: 4.7,
    Value: "120000 ₹",
    color: "Black",
  },
  {
    id: 4,
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/wearables/pdp/sm-r760ndaaxar/gallery/S3_Frontier_Front_1600x1200.jpg?$product-details-jpg$",
    title: "SAMSUNG Gear S3 Frontier Smartwatch",
    rating: 4.4,
    Value: "45000 ₹",
    color: "Black",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o9T1Pu0-NeysEVnTkBtY167945KK_soyDQ&s",
    title: "PS 5 PRO GAMING CONSOLE",
    rating: 4.5,
    Value: "50000 ₹",
    color: "White",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-14 mb-12 bg-white dark:bg-gray-900 py-10 transition duration-300">
      <div className="container mx-auto px-4">

        <div id="products"></div>

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-orange-500">
            Top Selling Products for you
          </p>

          <h1 className="text-3xl font-bold text-black dark:text-white">
            Products
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            High quality products so you can buy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              onClick={() => navigate(`/product/${data.id}`)} // ✅ UPDATED (dynamic)
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-[240px] cursor-pointer"
            >
              <div className="h-[230px] w-full bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-black dark:text-white text-sm line-clamp-2">
                  {data.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                  {data.color}
                </p>

                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm text-black dark:text-white">
                    {data.rating}
                  </span>
                </div>

                <p className="text-lg font-bold text-green-500 mt-2">
                  {data.Value}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;