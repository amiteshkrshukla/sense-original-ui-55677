import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    image: product1,
    title: "Premium Wireless Headphones - Noise Cancelling",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 2456,
  },
  {
    id: 2,
    image: product2,
    title: "Smart Watch - Fitness & Health Tracker",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 1823,
  },
  {
    id: 3,
    image: product3,
    title: "Designer Sunglasses - UV Protection",
    price: 89,
    originalPrice: 129,
    rating: 4.9,
    reviews: 987,
  },
  {
    id: 4,
    image: product4,
    title: "Leather Backpack - Premium Quality",
    price: 179,
    originalPrice: 249,
    rating: 4.6,
    reviews: 1432,
  },
  {
    id: 5,
    image: product5,
    title: "Stylish Sneakers - Comfort & Style",
    price: 119,
    originalPrice: 159,
    rating: 4.8,
    reviews: 3421,
  },
  {
    id: 6,
    image: product6,
    title: "Portable Bluetooth Speaker",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviews: 2134,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Most popular products this week</p>
          </div>
          <button className="text-primary font-semibold hover:underline hidden md:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:underline md:hidden">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
