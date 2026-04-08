import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        className={`mb-20 bg-gray-100 dark:bg-gray-800 text-white ${
          showPopup ? "blur-sm" : ""
        }`}
        style={BannerImg}
      >


           <div
      id="note" ></div>
        <div className="backdrop-blur-sm py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white/20 dark:bg-black/30 p-6 rounded-2xl shadow-lg">

            {/* TITLE */}
            <h1 className="text-2xl text-center sm:text-4xl font-semibold mb-6">
              Get Notified About New Products
            </h1>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black outline-none"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black outline-none"
                />

              </div>

              <textarea
                name="address"
                placeholder="Enter your address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* 🔥 POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl text-black">
            
            <h2 className="text-xl font-bold mb-4 text-center">
              Submitted Information
            </h2>

            <div className="space-y-2 text-sm">
              <p><strong>Username:</strong> {formData.username}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Password:</strong> {formData.password}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.address}</p>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Subscribe;
