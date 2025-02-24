import { useEffect, useState } from "react";
import { getProductsByID } from "../utils/API_Services";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await getProductsByID(id);
      setProduct(res.data);
      //   setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      maxWidth: "400px",
    },
    image: {
      width: "50%",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    name: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    price: {
      fontSize: "20px",
      color: "#28a745",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "15px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.name}>{product.title}</div>
        <div style={styles.price}>{product.price}</div>
        <div style={styles.description}>{product.description}</div>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
