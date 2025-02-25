import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

const UserDashboard = ({ handleLogout }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage("Product added to cart successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const buyItems = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Total price: $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>User Dashboard</h2>
      <Link
        to="/category"
        style={{
          display: "block",
          textAlign: "center",
          margin: "10px 0",
          textDecoration: "none",
          color: "#007BFF",
          fontWeight: "bold",
        }}
      >
        Browse by Category
      </Link>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          display: "block",
          margin: "10px auto",
        }}
      >
        Logout
      </button>
      {message && (
        <p style={{ color: "green", textAlign: "center" }}>{message}</p>
      )}
      <h3 style={{ textAlign: "center" }}>Cart</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {item.title} - ${item.price}
            <button
              onClick={() => removeFromCart(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ff5733",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button
          onClick={buyItems}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Buy
        </button>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "5px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "50%" }}
            />
            <h4 style={{ color: "#333" }}>{product.title}</h4>
            <h5 style={{ color: "#333" }}>
              {product.description.slice(0, 100)}...
            </h5>
            <h5 style={{ color: "#333" }}>{product.category}</h5>
            <h5 style={{ color: "#333" }}>
              Ratings: {product.rating.rate} ({product.rating.count})
            </h5>
            <p style={{ fontWeight: "bold", color: "#007BFF" }}>
              ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "8px 15px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
