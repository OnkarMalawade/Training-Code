import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, logout, login } = useContext(UserContext);

  // console.log(user);

  return (
    <nav
      style={{
        backgroundColor: "#007bff",
        padding: "16px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid #0056b3",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        MyApp
      </div>
      <ul
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "18px",
          listStyle: "none",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "white",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "white",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Cart
          </Link>
        </li>
        {user !== null ? (
          <li>
            <button
              onClick={() => logout()}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                backgroundColor: "#dc3545",
                border: "none",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#b02a37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#dc3545")
              }
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                backgroundColor: "#28a745",
                border: "none",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#218838")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#28a745")
              }
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
