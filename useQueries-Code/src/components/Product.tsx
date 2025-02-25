import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // Mutation
  const mutation = useMutation({
    mutationFn: (updatedProduct) => {
      return axios.put(
        `https://fakestoreapi.com/products/${params.id}`,
        updatedProduct
      );
    },
  });

  const fetchProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    return data;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.id],
    queryFn: fetchProduct,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error : {error.message}</h3>;
  }

  return (
    <div>
      <h3>Single Product: {product?.title}</h3>
      <p>Price: {product?.price}</p>

      <input
        type="text"
        placeholder="Update Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Update Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={() => mutation.mutate({ title, price })}>Update</button>
    </div>
  );
};

export default Product;
