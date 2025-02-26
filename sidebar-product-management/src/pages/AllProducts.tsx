import type React from "react";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
