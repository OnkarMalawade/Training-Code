import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav
      style={{
        backgroundColor: "#1E3A8A",
        padding: "1rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>MyApp</div>
      <div>
        <Link
          to={
            state.userType === "admin"
              ? "/admin"
              : state.userType === "user"
              ? "/user"
              : "/"
          }
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            color: "white",
            fontSize: "1.1rem",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
        >
          Home
        </Link>
        {state.userType === "user" && (
          <Link
            to="/cart"
            style={{
              padding: "0.5rem 1rem",
              textDecoration: "none",
              color: "white",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              borderRadius: "5px",
              transition: "background 0.3s",
            }}
          >
            Cart
          </Link>
        )}
        {state.userType ? (
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              border: "none",
              backgroundColor: "#DC3545",
              color: "white",
              fontSize: "1.1rem",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            style={{
              padding: "0.5rem 1rem",
              textDecoration: "none",
              color: "white",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              borderRadius: "5px",
              transition: "background 0.3s",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
