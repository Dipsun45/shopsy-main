import React from "react";

// Images (same links + fallback support)
const watchImg =
  "https://istarmax.com/wp-content/uploads/2024/02/2024-FEB-PRODUCT-RANGE-1-1024x499.webp";
const gadgetImg =
  "https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg";
const vrImg =
  "https://www.knoxlabs.com/cdn/shop/collections/Group_171_1200x675.png?v=1679312546";

// fallback image (important)
const fallbackImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800";

const News = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-1">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Recent News
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Explore Our Blogs
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group">
            <div className="h-64 md:h-72 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={watchImg}
                alt="smartwatch"
                className="max-w-full max-h-full object-contain p-4 transition duration-300 group-hover:scale-105"
                onError={(e) => (e.target.src = fallbackImg)}
              />
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Jan 20, 2024 by Dilshad
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
              How to choose perfect smartwatch
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              Learn how to pick the best smartwatch based on features, battery life, and performance for your daily needs.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group">
            <div className="h-64 md:h-72 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={gadgetImg}
                alt="gadget"
                className="max-w-full max-h-full object-contain p-4 transition duration-300 group-hover:scale-105"
                onError={(e) => (e.target.src = fallbackImg)}
              />
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Jan 20, 2024 by Satya
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
              How to choose perfect gadget
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              Discover tips to select the right electronic gadgets with the best performance, quality, and value.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group">
            <div className="h-64 md:h-72 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={vrImg}
                alt="vr headset"
                className="max-w-full max-h-full object-contain p-4 transition duration-300 group-hover:scale-105"
                onError={(e) => (e.target.src = fallbackImg)}
              />
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Jan 20, 2024 by Sabir
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
              How to choose perfect VR headset
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              Explore how to choose the best VR headset for gaming, entertainment, and immersive experiences.
            </p>
          </div>

        </div>
      </div>

      {/* BRAND LOGO SECTION */}
      <div className="mt-16 bg-gray-100 dark:bg-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap items-center justify-between gap-6 text-gray-400 dark:text-gray-500 text-center">

        

          <div className="flex-1 min-w-[120px]">
            <span className="text-xl font-bold">APPLE</span>
            <p className="text-xs"></p>
          </div>

        
          <div className="flex-1 min-w-[120px]">
            <span className="text-xl font-bold">SAMSUNG</span>
            <p className="text-xs"></p>
          </div>
          
             <div
      id="news" ></div>
          <div className="flex-1 min-w-[120px]">
            <span className="text-xl font-bold">BOAT</span>
            <p className="text-xs"></p>
          </div>
          
          <div className="flex-1 min-w-[120px]">
            <span className="text-xl font-bold">CANON</span>
            <p className="text-xs"></p>
          </div>
          
          <div className="flex-1 min-w-[120px]">
            <span className="text-xl font-bold">ASUS</span>
            <p className="text-xs"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
