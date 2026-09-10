import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductSection from "../components/ProductSection";
import Benefits from "../components/Benefits";
import ExploreComplan from "../components/ExploreComplan";
import SuccessStory from "../components/SuccessStory";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ExploreComplan />
      <ProductSection />
      <Benefits />
      <SuccessStory />
    </div>
  );
};

export default Home;
