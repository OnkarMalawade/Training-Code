import type React from "react";
import { useState, useEffect } from "react";
import { ArrowUpDown } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <button
        onClick={sortProducts}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <ArrowUpDown className="inline-block mr-2 h-4 w-4" />
        Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            {product.title} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
