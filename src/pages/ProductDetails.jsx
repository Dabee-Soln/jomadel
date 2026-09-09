import React from "react";
import { useParams } from "react-router";
import { products } from "../data";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!products) {
    return <div className="text-center text-2xl">Product not found</div>;
  }
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-start md:space-x-8">
          <div className="md:w-1/2 md:h-screen mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-1/2 block m-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-orange-900">
              {product.name}
            </h1>
            <p className="text-gray-700 mb-4">{product.tagline}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-orange-700">
                Benefits
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                {product.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {product.indications && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-700">
                  Conditions and Sickness it helps with
                </h2>
                <ul className="list-disc pl-6 text-gray-700">
                  {product.indications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                <a href="https://www.jomadel.com/default.aspx">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
