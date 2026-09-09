import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo3.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);
  return (
    <nav className="bg-gradient-to-r from-orange-900 via-orange-700 to-orange-500 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HWI-HEALTHY WAY Logo" className="h-12 mr-3" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 text-white ${
            isMobileMenuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-green-900 py-4 items-center transition-all duration-300 ease-in-out"
              : "hidden md:flex"
          }`}
        >
          <Link
            to="/"
            className="hover:text-gray-200 transition duration-300 py-2 md:m-0 md:py-0 w-full flex items-center justify-center text-sm md:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition duration-300 py-2 md:py-0 w-full flex items-center justify-center text-sm md:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/products"
            className="hover:text-gray-200 transition duration-300 py-2 md:py-0 w-full flex items-center justify-center text-sm md:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/compensation"
            className="hover:text-gray-200 transition duration-300 py-2 md:py-0 w-full flex items-center justify-center text-sm md:text-base whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Compensation Plan
          </Link>

          {isMobileMenuOpen && ( // Conditionally render buttons in mobile menu
            <div className="mt-4 space-y-2">
              {" "}
              {/* Added spacing and full width */}
              <a href="http://www.jomadel.com/default.aspx"
                className="bg-white text-green-700 font-medium py-2 px-4 mr-2 rounded-lg hover:bg-gray-100 transition duration-300 w-full text-center"
                onClick={toggleMobileMenu}
              >
                Log In
              </a>
              <a href="http://www.jomadel.com/default.aspx"
                className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full text-center"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </a>
            </div>
          )}
        </div>

        <div className="hidden md:flex space-x-4">
          {" "}
          {/* Hidden on small screens, flex on medium and up */}
          <a
            href="http://www.jomadel.com/default.aspx"
            className="bg-white text-green-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Log In
          </a>
          <a
            href="http://www.jomadel.com/default.aspx"
            className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
