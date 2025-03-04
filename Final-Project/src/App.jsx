import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import useAuthStore from "./auth/authStore";
import Product from "./components/Product";
import CartPage from "./components/CartPage";
import Carts from "./components/Carts";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";

const ProtectedRoute = ({ element }) => {
    const { token } = useAuthStore();
    return token ? element : <Navigate to="/" replace />;
};

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/products"
                    element={<ProtectedRoute element={<ProductList />} />}
                />
                <Route
                    path="/products/:id"
                    element={<ProtectedRoute element={<Product />} />}
                />
                <Route
                    path="/cart"
                    element={<ProtectedRoute element={<CartPage />} />}
                />
                <Route
                    path="/carts"
                    element={<ProtectedRoute element={<Carts />} />}
                />
                <Route
                    path="/users"
                    element={<ProtectedRoute element={<UserList />} />}
                />
                <Route
                    path="/users/:id"
                    element={<ProtectedRoute element={<UserDetails />} />}
                />
                <Route
                    path="/users/edit/:id"
                    element={<ProtectedRoute element={<EditUser />} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
