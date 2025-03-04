import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Reducer function to handle multiple state changes
const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_TITLE":
            return { ...state, title: action.payload };
        case "SET_PRICE":
            return { ...state, price: action.payload };
        case "SET_MESSAGE":
            return { ...state, message: action.payload };
        case "RESET_FORM":
            return { title: "", price: "", message: "" };
        default:
            return state;
    }
};

const Product = () => {
    const params = useParams();
    const navigate = useNavigate();

    // useReducer to manage multiple states
    const [state, dispatch] = useReducer(productReducer, {
        title: "",
        price: "",
        message: "",
    });

    // Fetch product details
    const fetchProduct = async () => {
        const response = await axios.get(
            `https://dummyjson.com/products/${params.id}`,
        );
        return response.data;
    };

    const {
        isLoading,
        error,
        data: product,
        refetch,
    } = useQuery({
        queryKey: ["product", params.id],
        queryFn: fetchProduct,
    });

    // Update product mutation
    const mutation = useMutation({
        mutationFn: async (updatedProduct) => {
            const response = await axios.put(
                `https://dummyjson.com/products/${params.id}`,
                updatedProduct,
            );
            return response.data;
        },
        onSuccess: () => {
            dispatch({
                type: "SET_MESSAGE",
                payload: "Product updated successfully!",
            });
            setTimeout(
                () => dispatch({ type: "SET_MESSAGE", payload: "" }),
                3000,
            );
            refetch(); // Refresh product details
        },
        onError: () => {
            dispatch({
                type: "SET_MESSAGE",
                payload: "Failed to update product!",
            });
        },
    });

    // Handle loading state
    if (isLoading) {
        return (
            <h3 className="text-center text-blue-500">Loading product...</h3>
        );
    }

    // Handle error state
    if (error) {
        return (
            <h3 className="text-center text-red-500">Error: {error.message}</h3>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
                Edit Product: {product?.title}
            </h3>
            <p className="text-gray-600 text-center mb-4">
                Price: ${product?.price}
            </p>

            {state.message && (
                <p className="text-center text-green-500 font-semibold">
                    {state.message}
                </p>
            )}

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Update Title"
                    value={state.title}
                    onChange={(e) =>
                        dispatch({ type: "SET_TITLE", payload: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    placeholder="Update Price"
                    value={state.price}
                    onChange={(e) =>
                        dispatch({ type: "SET_PRICE", payload: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() =>
                        mutation.mutate({
                            title: state.title,
                            price: state.price,
                        })
                    }
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Update Product
                </button>
                <button
                    onClick={() => navigate("/products")}
                    className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                    Back to Products
                </button>
            </div>
        </div>
    );
};

export default Product;
