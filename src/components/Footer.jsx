import React from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="Jomadel Logo" className="h-10 mr-3" />
          </Link>
          <p className="text-gray-400 text-sm">
          To be a global leader in natural wellness solutions, enriching lives through quality herbal health remedies while creating sustainable wealth and lasting legacies for our stakeholders.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Jomadel. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/products"
                className="hover:text-white transition duration-300"
              >
                Products
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/compensation"
                className="hover:text-white transition duration-300"
              >
                Compensation Plan
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a href="mailto:Jomadelinternationalngltd@gmail.com">Jomadelinternationalngltd@gmail.com</a>
            <br />
            Phone: <a href="tel:+2348033523004">08033523004</a>,{" "}
            <a href="tel:+2348033516951"> 08033516951</a>
            <br />
            Address:{" "}
            <a href="https://maps.app.goo.gl/3eBR9JHXdejejFMY6">
             117, Allen Avenue, Allen junction Ikeja Lagos.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
