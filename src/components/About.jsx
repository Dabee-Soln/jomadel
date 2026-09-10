import React from "react";
import aboutImage from "../assets/slogan.jpg";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img src={aboutImage} alt="Jomadel International" className="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <p className="text-green-700 font-semibold uppercase tracking-wider mb-2">
              Transforming Lives Through Health and Wealth
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-orange-900">
              About Jomadel International
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jomadel is an indigenous MLM company created to bring value to
              health and opportunity seekers. The company was founded by seasoned
              and experienced networkers with more than three decades of combined
              team experience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our commitment is to provide a platform where individuals can invest
              in their overall well-being, invite others on the same empowering
              journey, and pursue greater health and financial vitality.
            </p>
            <Link
              to="/about"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition inline-block"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
