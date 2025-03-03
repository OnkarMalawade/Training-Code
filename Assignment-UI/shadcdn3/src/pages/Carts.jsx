import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Products
                const productsResponse = await axios.get(
                    "https://fakestoreapi.com/products",
                );
                setProducts(productsResponse.data);

                // Fetch Carts
                const cartsResponse = await axios.get(
                    "https://fakestoreapi.com/carts",
                );
                const cartData = cartsResponse.data.map((cart) => ({
                    ...cart,
                    products: cart.products.map((product) => ({
                        ...product,
                        details:
                            productsResponse.data.find(
                                (p) => p.id === product.productId,
                            ) || {},
                    })),
                }));

                setCarts(cartData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {loading ? (
                <p className="text-center text-lg font-semibold">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500 font-semibold">
                    {error}
                </p>
            ) : (
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Carts ({carts.length})
                    </h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {carts.map((cart) => (
                            <div
                                key={cart.id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold text-gray-700">
                                    Cart ID:{" "}
                                    <span className="text-blue-500">
                                        {cart.id}
                                    </span>
                                </h2>
                                <p className="text-gray-600">
                                    Products: {cart.products.length}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {cart.products.map((product) => (
                                        <li
                                            key={product.productId}
                                            className="bg-gray-50 p-3 rounded-lg shadow-sm"
                                        >
                                            <Link
                                                to={`/carts/${product.details.id}`}
                                            >
                                                <h3 className="text-gray-800 font-medium">
                                                    {product.details.title ||
                                                        "Unknown Product"}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-gray-600">
                                                Price: $
                                                {product.details.price || "N/A"}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Quantity: {product.quantity}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carts;
