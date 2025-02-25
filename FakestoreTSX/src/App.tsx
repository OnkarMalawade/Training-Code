import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const handleLogout = () => dispatch({ type: "LOGOUT" });

  return (
    <Router>
      <Routes>
        {!state?.userType ? (
          <Route path="/" element={<Login />} />
        ) : state.userType === "admin" ? (
          <Route
            path="/"
            element={<AdminDashboard handleLogout={handleLogout} />}
          />
        ) : (
          <>
            <Route
              path="/"
              element={<UserDashboard handleLogout={handleLogout} />}
            />
            <Route path="/category" element={<CategoryPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
