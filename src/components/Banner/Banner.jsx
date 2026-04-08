import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const BannerImg =
  "https://img.freepik.com/free-vector/technological-sales-background_3446-375.jpg?semt=ais_hybrid&w=740&q=80";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

          {/* ✅ Image section */}
          <div className="flex justify-center">
            <div className="w-[400px] h-[300px] bg-white rounded-xl shadow-lg flex items-center justify-center">
              <img
                src={BannerImg}
                alt="Banner"
                className="max-w-full max-h-full object-contain p-4"
                
                // fallback
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800";
                }}
              />
            </div>
          </div>

          {/* Text section */}
          <div className="flex flex-col justify-center gap-6">
               <div
      id="sale" ></div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Phenomenal Sale here
            </h1>

            <p className="text-sm text-gray-500 tracking-wide leading-5">
              You can see phenomenal sale here and buy amazing and top class
              products so it's unique platform.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              <div className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>

              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 p-3 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>

              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 p-3 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
