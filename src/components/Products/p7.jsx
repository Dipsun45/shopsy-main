import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail7() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // 🔥 POPUP STATE
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 FORM DATA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const products = {
    1: {
      name: "Samsung Galaxy S26 Ultra",
      price: 130000,
      oldPrice: 145000,
      rating: 4.5,
      images: [
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/d/0/x/-original-imahhyzrnhgzvdk4.jpeg?q=70",
      ],
      description:
        "Flagship Samsung smartphone with advanced camera, powerful processor, and premium design.",
      specs: [
        "200MP Camera",
        "120Hz AMOLED Display",
        "Snapdragon Processor",
        "5000mAh Battery",
      ],
    },
  };

  const product = products[id] || products[1];
  const [mainImage, setMainImage] = useState(product.images[0]);

  useEffect(() => {
    setMainImage(product.images[0]);
  }, [id]);

  // ⏱ AUTO HIDE ORDER DETAILS
  useEffect(() => {
    if (submittedData) {
      const timer = setTimeout(() => {
        setSubmittedData(null);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [submittedData]);

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowPopup(false);

    setFormData({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-28 pb-16 px-4 text-black dark:text-white">

      {/* 🔥 APPLY BLUR ONLY HERE */}
      <div className={`max-w-6xl mx-auto ${showPopup ? "blur-sm" : ""}`}>

        {/* PRODUCT SECTION */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={mainImage}
              className="w-full max-w-[400px] rounded-xl object-contain"
              alt="product"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-3xl font-bold mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-semibold text-orange-500">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.oldPrice}
              </span>
              <span className="text-yellow-500">
                ⭐ {product.rating}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {product.description}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                +
              </button>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">
                Add to Cart
              </button>

              <button
                onClick={() => setShowPopup(true)}
                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-700"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <div className="flex gap-6 border-b mb-4">
            {["description", "specs", "reviews"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
          )}

          {activeTab === "specs" && (
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300">
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          )}

          {activeTab === "reviews" && (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>

        {/* ORDER DETAILS */}
        {submittedData && (
          <div className="mt-10 p-5 border rounded bg-green-100 dark:bg-green-900">
            <h2 className="text-xl font-bold mb-2">Order Details</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Product:</strong> {product.name}</p>
            <p className="text-sm text-gray-500 mt-2">
              (Auto hide in 15 seconds)
            </p>
          </div>
        )}

      </div>

      {/* 🔥 POPUP (NO BLUR ISSUE NOW) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl text-black">

            <h2 className="text-xl font-bold mb-4 text-center">
              Order Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />

              <textarea
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded"
              >
                Submit Order
              </button>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="w-full text-red-500 mt-2"
              >
                Cancel
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}