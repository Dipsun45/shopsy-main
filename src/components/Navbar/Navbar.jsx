import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Gudjets", link: "#gudjets" },
  { id: 3, name: "Products", link: "#products" },
  { id: 4, name: "Top Product", link: "#best-products" },
  { id: 5, name: "Sale", link: "#sale" },
  { id: 6, name: "Notify", link: "#note" },
];

const DropdownLinks = [
  { id: 1, name: "Other Products", link: "#products1" },
  { id: 2, name: "Review", link: "#review" },
  { id: 3, name: "News", link: "#news" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Smooth scroll
  const scrollToSection = (link) => {
    if (link.startsWith("#")) {
      const section = document.querySelector(link);
      if (section) {
        const yOffset = -110;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      scrollToSection(link);
    }
  };

  // ✅ Search handler
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const allLinks = [...Menu, ...DropdownLinks];

      const match = allLinks.find((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (match) {
        scrollToSection(match.link);
      } else {
        alert("No matching section found!");
      }

      setSearchTerm("");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            
            <a className="text-2xl flex items-center gap-2 text-black dark:text-white">
              <img src={Logo} className="w-10 h-10" />
              Shopsy
            </a>

            <div className="flex items-center gap-4">
              
              {/* ✅ Search Bar */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search section..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                  className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-4 py-2"
                />
                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
              </div>

              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full flex items-center gap-2"
              >
                <FaCartShopping />
              </button>

              <DarkMode />
            </div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div className="flex justify-center bg-white dark:bg-gray-900">
          <ul className="sm:flex hidden items-center gap-4 py-3">
            
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  onClick={(e) => handleScroll(e, data.link)}
                  className="px-4 text-black dark:text-white hover:text-primary transition duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative">
              <a className="px-4 text-black dark:text-white hover:text-primary transition duration-200 flex items-center gap-1 cursor-pointer">
                Trending Products
                <FaCaretDown className="group-hover:rotate-180 transition duration-200" />
              </a>

              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded-md shadow-md w-[180px]">
                {DropdownLinks.map((data) => (
                  <a
                    key={data.id}
                    href={data.link}
                    onClick={(e) => handleScroll(e, data.link)}
                    className="block px-3 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition"
                  >
                    {data.name}
                  </a>
                ))}
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[110px]"></div>
    </div>
  );
};

export default Navbar;
