import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../auth/cartStore"; // ✅ Import Zustand cart store
import useAuthStore from "../auth/authStore"; // ✅ Import Zustand auth store

const Navbar = () => {
    const { totalItems } = useCartStore(); // ✅ Get total cart items count
    const { logout, token } = useAuthStore(); // ✅ Get logout function and auth state
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        logout(); // Clear authentication state
        navigate("/"); // Redirect to login page
    };

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
            {/* Logo */}
            <Link to="/" className="text-lg font-bold hover:text-gray-300">
                My Store
            </Link>

            {/* Navigation Links */}
            <ul className="flex space-x-6 items-center">
                {token && (
                    <li>
                        <Link to="/products" className="hover:text-gray-300">
                            Products
                        </Link>
                    </li>
                )}
                {token && (
                    <li>
                        <Link to="/users" className="hover:text-gray-300">
                            Users
                        </Link>
                    </li>
                )}

                {token && (
                    <li>
                        <Link to="/quotes" className="hover:text-gray-300">
                            Quotes
                        </Link>
                    </li>
                )}

                {token && (
                    <li>
                        <Link to="/carts" className="hover:text-gray-300">
                            All Carts
                        </Link>
                    </li>
                )}
                {token && (
                    <li>
                        <Link to="/orders" className="hover:text-gray-300">
                            Orders
                        </Link>
                    </li>
                )}
                {token && (
                    <li>
                        <Link to="/posts" className="hover:text-gray-300">
                            Blog
                        </Link>
                    </li>
                )}

                {/* ✅ Cart Button with Dynamic Count */}
                {token && (
                    <li>
                        <Link
                            to="/cart"
                            className="relative bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
                        >
                            Cart
                            {totalItems() > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                    {totalItems()}
                                </span>
                            )}
                        </Link>
                    </li>
                )}

                {/* ✅ Logout Button (Only Visible if Logged In) */}
                {token && (
                    <li>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
