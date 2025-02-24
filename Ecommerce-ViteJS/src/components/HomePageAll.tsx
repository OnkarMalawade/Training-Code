import { useState, useEffect } from "react";
import { getAllProducts } from "../utils/API_Services";
import ProductCard from "./ProductCard";

const HomePageAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        padding: "24px",
        backgroundColor: "#f8f9fa",
      }}
    >
      {loading ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Loading...
        </p>
      ) : (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </div>
  );
};

export default HomePageAll;
