import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage";
import Navbar from "./pages/Components/Navbar";

function App() {
  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
