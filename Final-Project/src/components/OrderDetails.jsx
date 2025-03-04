import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://dummyjson.com/carts";

// Fetch Order Details
const fetchOrder = async (orderId) => {
    const response = await axios.get(`${API_URL}/${orderId}`);
    return response.data;
};

// Update Order Status
const updateOrderStatus = async ({ orderId, status }) => {
    return axios.put(`${API_URL}/${orderId}`, { status });
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

    const [status, setStatus] = useState(order?.status || "Pending");
    const mutation = useMutation(updateOrderStatus, {
        onSuccess: () => {
            alert("Order status updated!");
        },
    });

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        mutation.mutate({ orderId: id, status: e.target.value });
    };

    if (isLoading) return <p className="text-center">Loading order...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Order ID: {order.id}</h2>
            <p>Total Price: ${order.total}</p>
            <p>Total Products: {order.totalProducts}</p>

            {/* Order Status Update */}
            <label className="block mt-4">Update Status:</label>
            <select
                value={status}
                onChange={handleStatusChange}
                className="border p-2 w-full rounded"
            >
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
            </select>
        </div>
    );
};

export default OrderDetails;
