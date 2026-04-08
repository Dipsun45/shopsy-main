import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [showDetails, setShowDetails] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields!");
      return;
    }
    setShowDetails(true);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          
          {/* FORM POPUP */}
          {!showDetails && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 shadow-lg bg-white dark:bg-gray-900 rounded-xl w-[320px]">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Form */}
              <div className="mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-full border px-3 py-2 mb-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border px-3 py-2 mb-3"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-full border px-3 py-2 mb-4"
                />

                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* DETAILS POPUP */}
          {showDetails && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 rounded-xl w-[320px] text-center">
              
              <h2 className="text-xl font-semibold mb-4 text-green-600">
                ✅ Order Confirmed!
              </h2>

              <div className="text-left space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>
              </div>

              <button
                onClick={() => {
                  setShowDetails(false);
                  setOrderPopup(false);
                }}
                className="mt-5 bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          )}

        </div>
      )}
    </>
  );
};

export default Popup;
