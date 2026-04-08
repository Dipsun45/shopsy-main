import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductsData = [
  {
    id: 6,
    img: "https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.landing-big_2x.jpg",
    title: "Apple MacBook Pro",
    rating: 5.0,
    Value: "150000 ₹",
    color: "Silver",
  },
  {
    id: 7,
    img: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/d/0/x/-original-imahhyzrnhgzvdk4.jpeg?q=70",
    title: "Samsung Galaxy S26 Ultra",
    rating: 4.5,
    Value: "130000 ₹",
    color: "Black",
  },
  {
    id: 8,
    img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/301439_0_GsdZBqbNG.png",
    title: "boAt Stone Ignite Portable Bluetooth Speaker",
    rating: 4.7,
    Value: "6000 ₹",
    color: "Black",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61fJF9KBLEL._AC_UF1000,1000_QL80_.jpg",
    title: "Sony VAIO Touchscreen Desktop",
    rating: 4.4,
    Value: "45000 ₹",
    color: "Black",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61goypdjAYL.jpg",
    title: "10.9-inch iPad 10th Gen",
    rating: 4.5,
    Value: "50000 ₹",
    color: "Silver",
  },
];

const Products1 = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mt-14 mb-12 bg-white dark:bg-gray-900 py-12">
 <div
  id="products1">  </div>
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p className="text-sm text-orange-500">
            Top Selling Products for you
          </p>

          <h1 className="text-3xl font-bold text-black dark:text-white mt-1">
            Products
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            High quality products so you can buy
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
onClick={() => navigate(`/product/${data.id}`)}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 w-[260px] cursor-pointer"
            >
              
              {/* Image */}
              <div className="h-[260px] w-full bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full object-contain p-3"
                />
              </div>

              {/* Content */}
              <div className="mt-5 text-center">
                <h3 className="font-semibold text-black dark:text-white text-base">
                  {data.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {data.color}
                </p>

                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm text-black dark:text-white">
                    {data.rating}
                  </span>
                </div>

                <p className="text-xl font-bold text-green-600 mt-3">
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

export default Products1;
