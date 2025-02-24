import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleUpdate = (id) => {
    const updatedProduct = {
      title: "Updated Title",
      price: "99.99",
      image: "https://via.placeholder.com/150",
    };
    axios
      .put(`https://fakestoreapi.com/products/${id}`, updatedProduct)
      .then(() => fetchProducts())
      .catch((error) => console.error("Error updating product:", error));
  };

  const handleAdd = () => {
    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({ title: "", price: "", image: "" });
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </div>
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
              onClick={() => handleUpdate(product.id)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#ffc107",
                color: "black",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#dc3545",
                color: "white",
                cursor: "pointer",
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

export default Admin;
