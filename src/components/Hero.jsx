import React from "react";
import { slides } from "../data";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      x: 300, // Start off-screen to the right
    },
    animate: {
      opacity: 1,
      x: 0, // Slide into view
      transition: {
        duration: 0.8, // Adjust duration as needed
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -300, // Slide out to the left
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-[500px] bg-cover bg-center overflow-hidden w-full">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            currentSlide === index && ( // Only render the current slide within AnimatePresence
              <motion.div
                key={index}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.5 },
                    }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl mb-8 text-center px-4 md:px-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.7 },
                    }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.9,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                  >
                    <Link to={slide.link}>{slide.button}</Link>
                  </motion.button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
