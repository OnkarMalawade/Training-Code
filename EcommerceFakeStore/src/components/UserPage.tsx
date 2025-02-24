import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h3 style={{ fontSize: "14px", margin: "10px 0" }}>
              {product.title}
            </h3>
            <p style={{ fontWeight: "bold", color: "#007bff" }}>
              ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/cart"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
