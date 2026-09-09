import React from "react";
import { benefits } from "../data";
import { motion } from "framer-motion";

const Benefits = () => {
    const cardVariants = {
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: (i) => ({ // Make onscreen a function to accept index
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: i * 0.2, // Add delay based on index
          },
        }),
      };

  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-900">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between items-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }} // important change
            custom={index} // Pass the index as a custom prop
          >
            <div className="text-center">
              <div className="flex justify-center mb-4"><benefit.icon size={50} className={benefit.className}/></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Benefits;
