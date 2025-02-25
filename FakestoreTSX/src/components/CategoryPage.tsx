import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  if (!response.status === 200) {
    throw new Error("Failed to fetch categories");
  }
  return response.data;
};

const fetchProductsByCategory = async ({ queryKey }) => {
  const [, category] = queryKey;
  if (!category) return [];
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!response.status === 200) {
    throw new Error("Failed to fetch products");
  }
  return response.data;
};

const CategoryPage = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: fetchProductsByCategory,
    enabled: !!selectedCategory,
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <h1>Loading categories...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Categories</h2>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "10px", margin: "10px 0", fontSize: "16px" }}
      >
        <option value="">Select a category</option>
        {categories?.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => refetch()}>Refetch Categories</button>
      {isProductsLoading && <h1>Loading products...</h1>}
      {productsError && <h1>{productsError.message}</h1>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products?.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "5px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "50%" }}
            />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
