import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://dummyjson.com/carts";

// Fetch Orders (Using Carts as Orders)
const fetchOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data.carts;
};

const OrderList = () => {
    const {
        data: orders = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: fetchOrders,
    });

    if (isLoading) return <p className="text-center">Loading orders...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Order History
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold">
                            Order ID: {order.id}
                        </h3>
                        <p>Total Price: ${order.total}</p>
                        <p>Total Products: {order.totalProducts}</p>
                        <Link
                            to={`/orders/${order.id}`}
                            className="block text-center bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
