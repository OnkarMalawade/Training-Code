import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage";
import Navbar from "./pages/Components/Navbar";
import Carts from "./pages/Carts";
import CartPage from "./pages/CartPage";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductPage />}></Route>
                <Route path="/carts" element={<Carts />}></Route>
                <Route path="/carts/:id" element={<CartPage />}></Route>
            </Routes>
        </>
    );
};

export default App;
