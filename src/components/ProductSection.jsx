import { products } from "../data";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-900">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {/* Responsive grid */}
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              benefits={product.benefits}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
