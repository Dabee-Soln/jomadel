import React from "react";
import aboutImage from "../assets/slogan.jpg";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-12 bg-gray-50">
      {" "}
      {/* Section with padding and light background */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Container for centering */}
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-900">
          About Us
        </h2>{" "}
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {" "}
          {/* Grid for layout */}
          <div className="md:order-2">
            {" "}
            {/* Image on the right on larger screens */}
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              At Jomadel, we are committed to To accomplish the brand vision,
              Jomadel International delivers premium herbal health products
              through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {" "}
              {/* List of highlights */}
              <li className="mb-2">
                Strategic partnerships with government-approved manufacturers
              </li>
              <li className="mb-2">
                Expert oversight by qualified public health consultants
              </li>
              <li className="mb-2">
                Professional global distribution networks
              </li>
              <li className="mb-2">
                Innovative direct sales strategies led by experienced marketing
                professionals
              </li>
            </ul>
            <div className="text-center md:text-left">
              <Link
                to="/about"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
              >
                {" "}
                {/* Use Link component */}
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
