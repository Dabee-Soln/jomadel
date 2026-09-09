import { products } from "../data";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section (Optional) */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-orange-900">Our Products</h1>
          <p className="text-gray-600 mt-2">Check out our amazing products</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                tagline={product.tagline}
                image={product.image}
                description={product.description}
                benefits={product.benefits}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
