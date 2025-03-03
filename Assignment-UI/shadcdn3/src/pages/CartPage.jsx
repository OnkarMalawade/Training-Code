/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CartPage = () => {
    const { id } = useParams();
    const [cart, setCart] = useState(null);
    const [products, setProducts] = useState([]);

    const fetchCart = async () => {
        try {
            const cartResponse = await axios.get(
                `https://fakestoreapi.com/carts/${id}`,
            );
            const productResponse = await axios.get(
                "https://fakestoreapi.com/products",
            );

            const enrichedCart = {
                ...cartResponse.data,
                products: cartResponse.data.products.map((item) => ({
                    ...item,
                    details:
                        productResponse.data.find(
                            (p) => p.id === item.productId,
                        ) || {},
                })),
            };

            setCart(enrichedCart);
            setProducts(productResponse.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [id]);

    if (!cart) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
                Cart ID: {cart.id}
            </h2>
            <p className="text-gray-600 text-center">
                Total Products: {cart.products.length}
            </p>

            <div className="space-y-4">
                {cart.products.map((product) => (
                    <div
                        key={product.productId}
                        className="flex items-center bg-gray-50 p-4 rounded-lg shadow"
                    >
                        <img
                            src={product.details.image}
                            alt={product.details.title}
                            className="w-20 h-20 object-contain rounded-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.details.title}
                            </h3>
                            <p className="text-gray-600">
                                Price: ${product.details.price || "N/A"}
                            </p>
                            <p className="text-gray-500">
                                Quantity: {product.quantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200">
                    Edit Cart
                </button>
                <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200">
                    Delete Cart
                </button>
            </div>
        </div>
    );
};

export default CartPage;
