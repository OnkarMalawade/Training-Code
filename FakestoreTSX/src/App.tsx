import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleLogout = () => dispatch({ type: "LOGOUT" });

  return (
    <Router>
      {!state?.userType ? (
        <Login />
      ) : state.userType === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <UserDashboard handleLogout={handleLogout} />
      )}
    </Router>
  );
};

export default App;
