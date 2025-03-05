import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://dummyjson.com/carts";

// Fetch Order Details
const fetchOrder = async (orderId) => {
    const response = await axios.get(`${API_URL}/${orderId}`);
    return response.data;
};

const OrderDetails = () => {
    const { id } = useParams();
    const {
        data: order,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["order", id],
        queryFn: () => fetchOrder(id),
    });

    if (isLoading) return <p className="text-center">Loading order...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Order ID: {order.id}
            </h2>
            {order.products && order.products.length > 0 ? (
                <div>
                    {order.products.map((product) => (
                        <div
                            key={product.id}
                            className="flex justify-between border-b py-2"
                        >
                            <div>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <h3 className="text-gray-700">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500">
                                    Qty: {product.quantity}
                                </p>
                                <p className="text-gray-500">
                                    Price: ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 p-4 bg-gray-100 rounded">
                        <h3 className="text-lg font-semibold">
                            Total Price: ${order.total}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            Total Products: {order.totalProducts}
                        </h3>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    No products in this order.
                </p>
            )}
        </div>
    );
};

export default OrderDetails;
