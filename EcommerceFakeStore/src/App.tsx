import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import { createContext, useReducer, useEffect } from "react";
import UserPage from "./components/UserPage";
import Cart from "./components/Cart";

const initialState = {
  userType: localStorage.getItem("userType") || null,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, userType: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "LOGOUT":
      localStorage.removeItem("userType");
      return { ...state, userType: null, cart: [] };
    default:
      return state;
  }
};

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleStorageChange = () => {
      dispatch({ type: "SET_USER", payload: localStorage.getItem("userType") });
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
