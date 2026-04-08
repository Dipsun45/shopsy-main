import React from "react";

// Images
import headphone from "../../assets/a1.png";
import earphone from "../../assets/earphone.png";
import watch from "../../assets/smartwatch2-removebg-preview.png";
import laptop from "../../assets/macbook.png";
import speaker from "../../assets/speaker.png";
import vr from "../../assets/vr.png";
import consoleImg from "../../assets/gaming.png";

const Surface = () => {
  return (

    
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ✅ CENTER CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-1  py-10">

        {/* 🔥 HERO SECTION */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between mb-10 shadow-sm">
          
          <div>

            <div
  id="gudjets">  </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Beats Solo
            </p>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Wireless
            </h1>

            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-200 dark:text-gray-700">
              HEADPHONE
            </h1>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition">
              Shop By Category
            </button>
          </div>
          

          <img
            src={headphone}
            alt="headphone"
            className="w-72 mt-6 md:mt-0"
          />
        </div>

        {/* 🔥 CATEGORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white overflow-hidden">
            <p className="text-sm opacity-80">Enjoy</p>
            <h2 className="text-2xl font-bold">With Earphone</h2>
            <button className="mt-4 bg-red-500 px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={earphone} className="absolute bottom-0 right-0 w-28" />
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-r from-yellow-400 to-yellow-300 overflow-hidden">
            <p className="text-sm opacity-80">Enjoy</p>
            <h2 className="text-2xl font-bold text-white">With Gadget</h2>
            <button className="mt-4 bg-white px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={watch} className="absolute bottom-0 right-0 w-28" />
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-3xl p-6 bg-red-500 text-white overflow-hidden">
            <p className="text-sm opacity-80">Enjoy</p>
            <h2 className="text-2xl font-bold">With Laptop</h2>
            <button className="mt-4 bg-white text-red-500 px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={laptop} className="absolute bottom-0 right-0 w-32" />
          </div>

          {/* CARD 4 */}
          <div className="relative rounded-3xl p-6 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <p className="text-sm text-gray-600 dark:text-gray-300">Enjoy</p>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              With Console
            </h2>
            <button className="mt-4 bg-red-500 text-white px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={consoleImg} className="absolute bottom-0 right-0 w-32" />
          </div>

          {/* CARD 5 */}
          <div className="relative rounded-3xl p-6 bg-green-400 overflow-hidden">
            <p className="text-sm opacity-80 text-white">Enjoy</p>
            <h2 className="text-2xl font-bold text-white">With VR</h2>
            <button className="mt-4 bg-white px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={vr} className="absolute bottom-0 right-0 w-28" />
          </div>

          {/* CARD 6 */}
          <div className="relative rounded-3xl p-6 bg-blue-500 text-white overflow-hidden">
            <p className="text-sm opacity-80">Enjoy</p>
            <h2 className="text-2xl font-bold">With Speaker</h2>
            <button className="mt-4 bg-white text-blue-500 px-4 py-1 rounded-full">
              Browse
            </button>
            <img src={speaker} className="absolute bottom-0 right-0 w-28" />
          </div>

        </div>

        {/* 🔥 WINTER SALE SECTION */}
        <div className="mt-12 bg-red-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
          
          {/* LEFT */}
          <div>
            <p className="text-sm opacity-80">30% OFF</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-2">
              FINE SMILE
            </h1>
            <p className="text-sm mt-2">10 Jan to 28 Jan</p>
          </div>

          {/* CENTER IMAGE */}
          <div className="my-6 md:my-0">
            <img
              src={headphone}
              alt="sale-headphone"
              className="w-72 drop-shadow-2xl"
            />
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Air Solo Bass</p>
            <h2 className="text-4xl font-bold mt-2">Winter Sale</h2>
            <p className="text-sm mt-2 opacity-90 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis
            </p>

            <button className="mt-4 bg-white text-red-500 px-6 py-2 rounded-full font-semibold">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Surface;