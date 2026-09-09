import React from "react";
import { Link } from "react-router";

const ProductCard = ({ id, image, name, tagline, description, benefits }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-48 object-cover object-center m-auto block"
      />{" "}
      {/* Image with fixed height */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-sm text-primary font-medium mb-3">{tagline}</p>
        <p className="text-gray-600 mb-4">
          {description ? (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {description}
            </p>
          ) : (
            <div>
              {benefits.slice(0, 2).map((desc, id) => (
                <span key={id} className="line-clamp-2">{desc}, </span>
              ))}
            </div>
          )}
        </p>
        <div className="flex justify-between items-center">
          {/* <span className="text-lg font-bold text-green-600">
            {price}
          </span> */}
          <Link
            to={`/products/${id}`}
            className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
