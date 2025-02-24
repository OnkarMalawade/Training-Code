import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div
        key={index}
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <div style={{ padding: "12px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "6px",
              color: "#333",
            }}
          >
            {product.title}
          </h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            {product.description.length > 80
              ? product.description.slice(0, 80) + "..."
              : product.description}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#007bff",
              marginBottom: "4px",
            }}
          >
            Category: {product.category}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#28a745",
              marginBottom: "6px",
            }}
          >
            Price: ${product.price}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#ff9800",
            }}
          >
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>

          {user !== null ? (
            user?.role === "Admin" ? (
              <>
                <button>Update</button>
                <button>Delete</button>
              </>
            ) : (
              <Link to={`/products/${product.id}`}>Buy</Link>
            )
          ) : (
            <>
              <Link to="/login">Buy</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
