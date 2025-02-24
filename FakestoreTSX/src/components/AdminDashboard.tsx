import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

const AdminDashboard = ({ handleLogout }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setProducts(res.data));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  const addProduct = () => {
    axios.post(API_URL, newProduct).then((res) => {
      setProducts([...products, res.data]);
      setNewProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        ...(newProduct.rating && { rating: newProduct.rating }),
      });
    });
  };

  const updateProduct = () => {
    axios.put(`${API_URL}/${editProduct.id}`, editProduct).then((res) => {
      setProducts(
        products.map((p) => (p.id === editProduct.id ? res.data : p))
      );
      setEditProduct(null);
    });
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
      <h2 style={{ textAlign: "center", color: "#333" }}>Admin Dashboard</h2>

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

      <h3 style={{ textAlign: "center" }}>
        {editProduct ? "Edit Product" : "Add Product"}
      </h3>
      <input
        type="text"
        placeholder="Title"
        value={editProduct ? editProduct.title : newProduct.title}
        onChange={(e) => {
          editProduct
            ? setEditProduct({ ...editProduct, title: e.target.value })
            : setNewProduct({ ...newProduct, title: e.target.value });
        }}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "100%",
        }}
      />

      <input
        type="number"
        placeholder="Price"
        value={editProduct ? editProduct.price : newProduct.price}
        onChange={(e) => {
          editProduct
            ? setEditProduct({ ...editProduct, price: e.target.value })
            : setNewProduct({ ...newProduct, price: e.target.value });
        }}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "100%",
        }}
      />

      <input
        type="text"
        placeholder="Description"
        value={editProduct ? editProduct.description : newProduct.description}
        onChange={(e) => {
          editProduct
            ? setEditProduct({ ...editProduct, description: e.target.value })
            : setNewProduct({ ...newProduct, description: e.target.value });
        }}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "100%",
        }}
      />

      <input
        type="text"
        placeholder="Category"
        value={editProduct ? editProduct.category : newProduct.category}
        onChange={(e) => {
          editProduct
            ? setEditProduct({ ...editProduct, category: e.target.value })
            : setNewProduct({ ...newProduct, category: e.target.value });
        }}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "100%",
        }}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={editProduct ? editProduct.image : newProduct.image}
        onChange={(e) => {
          editProduct
            ? setEditProduct({ ...editProduct, image: e.target.value })
            : setNewProduct({ ...newProduct, image: e.target.value });
        }}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "100%",
        }}
      />

      <button
        onClick={editProduct ? updateProduct : addProduct}
        style={{
          padding: "10px 20px",
          backgroundColor: editProduct ? "#ffc107" : "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          display: "block",
          margin: "10px auto",
        }}
      >
        {editProduct ? "Update" : "Add"}
      </button>

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
            <p style={{ color: "#666" }}>
              {product.description.slice(0, 100)}...
            </p>
            <p style={{ fontWeight: "bold", color: "#007BFF" }}>
              ${product.price}
            </p>
            <p style={{ color: "#555" }}>Category: {product.category}</p>
            <p style={{ color: "#888" }}>
              Rating: {product.rating?.rate ?? "N/A"} (
              {product.rating?.count ?? 0})
            </p>

            <button
              onClick={() => setEditProduct(product)}
              style={{
                padding: "8px 15px",
                backgroundColor: "#ffc107",
                color: "black",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              onClick={() => deleteProduct(product.id)}
              style={{
                padding: "8px 15px",
                backgroundColor: "#ff5733",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
