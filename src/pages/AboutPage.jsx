import React from "react";
import aboutHero from "../assets/aboutHero.png";
import { FaBullseye, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { values } from "../data";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[300px] w-full"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-900">
              Our Mission
            </h2>
            <div className="items-center mb-4">
              <div className="flex">
                <FaBullseye className="text-3xl text-green-600 mr-2" />
                <p className="text-gray-700 leading-relaxed">
                  To accomplish the brand vision, Jomadel International delivers
                  premium herbal health products through:
                </p>
              </div>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
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
                  Innovative direct sales strategies led by experienced
                  marketing professionals
                </li>
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-900">
              Our Values
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              {values.map((value, id) => (
                <li key={id} className="flex flex-wrap items-center">
                  <value.icon className={value.className} />
                  <b className="mr-1">{value.title}</b> {value.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Company objectives */}

          {/* Our Team (Optional) */}

          {/* Our Vision */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-900">
              Our Vision
            </h2>
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-3xl text-green-600 mr-2" />
              <p className="text-gray-700 leading-relaxed">
                To be a global leader in natural wellness solutions, enriching
                lives through quality herbal health remedies while creating
                sustainable wealth and lasting legacies for our stakeholders.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
