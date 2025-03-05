import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sortData from "../utils/sortData";
import useCartStore from "../auth/cartStore"; // ✅ Import Zustand cart store

const API_URL = "https://dummyjson.com/products";

// Fetch Products
const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data.products;
};

// Delete Product API Call
const deleteProductApi = async (productId) => {
    await axios.delete(`${API_URL}/${productId}`);
};

const ProductList = () => {
    const queryClient = useQueryClient();
    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    const { addToCart } = useCartStore(); // ✅ Get addToCart function
    const [sortedProducts, dispatch] = useReducer(sortData, []);
    const [searchQuery, setSearchQuery] = useState("");

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: (data, productId) => {
            queryClient.invalidateQueries(["products"]); // Refresh product list after deletion
            alert(`Product ID ${productId} deleted successfully.`);
        },
        onError: () => {
            alert("Failed to delete product. Please try again.");
        },
    });

    useEffect(() => {
        if (products) {
            dispatch({ type: "UPDATE_PRODUCTS", payload: products });
        }
    }, [products]);

    if (isLoading)
        return <p className="text-center text-gray-600">Loading products...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    const filteredProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Handle Delete Confirmation
    const handleDelete = (productId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?",
        );
        if (confirmDelete) {
            deleteMutation.mutate(productId);
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                    Customers also purchased
                </h2>

                {/* Search & Sorting */}
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border p-2 w-1/3 rounded focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="flex space-x-2">
                        <button
                            onClick={() =>
                                dispatch({ type: "PRICE_LOW_TO_HIGH" })
                            }
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Price ↑
                        </button>
                        <button
                            onClick={() =>
                                dispatch({ type: "PRICE_HIGH_TO_LOW" })
                            }
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Price ↓
                        </button>
                        <button
                            onClick={() => dispatch({ type: "RATING_HIGH" })}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                        >
                            Rating
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                        >
                            <img
                                alt={product.title}
                                src={product.thumbnail}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700 font-semibold">
                                        <Link to={`/products/${product.id}`}>
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Rating: {product.rating}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        {product.description.slice(0, 40)}...
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    ${product.price}
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-2">
                                {product.tags.map((tag) => (
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* ✅ Add to Cart Button */}
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Add to Cart
                            </button>

                            {/* ✅ Delete Product Button */}
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
