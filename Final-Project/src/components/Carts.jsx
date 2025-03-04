import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://dummyjson.com/carts";

// Fetch Carts Data
const fetchCarts = async () => {
    const response = await axios.get(API_URL);
    return response.data.carts;
};

// Delete Cart API Call
const deleteCartApi = async (cartId) => {
    await axios.delete(`${API_URL}/${cartId}`);
};

const Carts = () => {
    const queryClient = useQueryClient();

    const {
        data: carts,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["carts"],
        queryFn: fetchCarts,
    });

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: deleteCartApi,
        onSuccess: (data, cartId) => {
            queryClient.invalidateQueries(["carts"]); // Refresh carts list after deletion
            alert(`Cart ID ${cartId} deleted successfully.`);
        },
        onError: () => {
            alert("Failed to delete cart. Please try again.");
        },
    });

    if (isLoading)
        return <p className="text-center text-gray-600">Loading carts...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    // Handle Delete Confirmation
    const handleDelete = (cartId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this cart?",
        );
        if (confirmDelete) {
            deleteMutation.mutate(cartId);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                Carts Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {carts.map((cart) => (
                    <div
                        key={cart.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">
                            Cart ID: {cart.id}
                        </h3>
                        <p className="text-gray-600">User ID: {cart.userId}</p>
                        <p className="text-gray-600">
                            Total Products: {cart.totalProducts}
                        </p>
                        <p className="text-lg font-bold text-green-600 mt-2">
                            Total Price: ${cart.total}
                        </p>

                        {/* ✅ Delete Button */}
                        <button
                            onClick={() => handleDelete(cart.id)}
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                        >
                            Delete Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carts;
