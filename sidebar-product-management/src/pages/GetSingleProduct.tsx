import type React from "react";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

const GetSingleProduct: React.FC = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      setProduct(data);
      setError("");
    } catch (error) {
      setProduct(null);
      setError("Error fetching product");
      console.error("Error fetching product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Get Single Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productId" className="block mb-1">
            Product ID
          </label>
          <input
            id="productId"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get Product
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {product && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default GetSingleProduct;
