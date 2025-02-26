import type React from "react";
import { useState } from "react";

const DeleteProduct: React.FC = () => {
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      setMessage(`Product deleted successfully: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage("Error deleting product");
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Delete Product</h1>
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
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Product
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default DeleteProduct;
