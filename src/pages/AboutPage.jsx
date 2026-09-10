import React from "react";
import aboutHero from "../assets/aboutHero.png";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { values } from "../data";

const AboutPage = () => {
  return (
    <div>
      <section
        className="relative h-[340px] w-full"
        style={{ backgroundImage: `url(${aboutHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <p className="uppercase tracking-widest text-green-200 font-semibold mb-3">
            Transforming Lives Through Health and Wealth
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-center">About Jomadel</h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-5 text-orange-900">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jomadel is an indigenous MLM company borne out of the need to create
              value in the lives of good-health and opportunity seekers. It was
              founded by seasoned and experienced networkers with over three
              decades of team experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment is to provide a platform where individuals can invest
              in their overall well-being, invite others to embark on this
              empowering journey, and build greater health and financial vitality.
              Jomadel is more than a company; it is a movement toward a healthier
              lifestyle and a wealthier future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-3xl text-green-600" />
                <h2 className="text-3xl font-bold text-orange-900">Our Vision</h2>
              </div>
              <p className="font-semibold text-gray-800 mb-3">
                To redefine wellness and entrepreneurship through a globalized e-commerce platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to establish a balanced and innovative e-commerce
                ecosystem in the wellness industry, providing seamless access to
                premium products while empowering individuals to transform their
                lives. By fostering global connections and nurturing
                entrepreneurial potential, we aim to shape a healthier and
                wealthier world.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-3xl text-green-600" />
                <h2 className="text-3xl font-bold text-orange-900">Our Mission</h2>
              </div>
              <p className="font-semibold text-gray-800 mb-3">
                Empowering lives through wellness and wealth creation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to inspire and equip individuals to achieve optimal
                health and financial independence. Through wellness solutions,
                comprehensive training and robust support systems, we enable
                people to enhance their quality of life while building sustainable
                income streams and a legacy of health, wealth and empowerment.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-orange-900 mb-3">Our Core Values</h2>
              <p className="text-gray-600">The principles that guide how Jomadel grows, serves and leads.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {values.map((value, id) => (
                <div key={id} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                  <value.icon className={`${value.className} mx-auto mb-3`} />
                  <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-900 text-white rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-3xl text-orange-400 shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Sound Health, Sound Wealth</h2>
                <p className="text-green-50 leading-relaxed mb-6">
                  Jomadel's wider vision connects healthy living with global
                  entrepreneurship, financial freedom, time freedom, recognition
                  and the opportunity to build a lasting legacy.
                </p>
                <Link to="/compensation" className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                  Explore the Business Opportunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
