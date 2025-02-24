import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "User",
    cart: [],
  });

  const { login } = useContext(UserContext);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleRoleToggle = () => {
    setIsAdmin(!isAdmin);
    setUser((prevUser) => ({ ...prevUser, role: !isAdmin ? "Admin" : "User" }));
  };

  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px 0",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>{isAdmin ? "Admin Login" : "User Login"}</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        style={styles.input}
        value={user.username}
        onChange={handleData}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        style={styles.input}
        value={user.password}
        onChange={handleData}
      />
      <div style={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="adminToggle"
          checked={isAdmin}
          onChange={handleRoleToggle}
        />
        <label htmlFor="adminToggle" style={{ marginLeft: "8px" }}>
          Login as Admin
        </label>
      </div>
      <button style={styles.button} onClick={() => login(JSON.stringify(user))}>
        Login
      </button>
    </div>
  );
}
