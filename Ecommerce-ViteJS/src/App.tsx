import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageAll from "./components/HomePageAll";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageAll />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
