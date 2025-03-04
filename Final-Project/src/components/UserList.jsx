import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://dummyjson.com/users";

// Fetch Users
const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data.users || [];
};

// Delete User
const deleteUserApi = async (userId) => {
    await axios.delete(`${API_URL}/${userId}`);
};

const UserList = () => {
    const queryClient = useQueryClient();

    const {
        data: users = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (Array.isArray(users)) {
            setFilteredUsers(
                users.filter((user) =>
                    user.firstName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                ),
            );
        }
    }, [users, searchQuery]);

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            alert("User deleted successfully.");
        },
        onError: () => {
            alert("Failed to delete user.");
        },
    });

    const handleDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteMutation.mutate(userId);
        }
    };

    if (isLoading)
        return <p className="text-center text-gray-600">Loading users...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                User Management
            </h2>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 mb-4"
            />

            {/* Users Grid */}
            {filteredUsers.length === 0 ? (
                <p className="text-center text-gray-500">No users found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">
                                {user.firstName} {user.lastName}
                            </h3>
                            <p className="text-gray-600">Email: {user.email}</p>
                            <p className="text-gray-600">Phone: {user.phone}</p>

                            {/* View & Delete Buttons */}
                            <div className="flex space-x-2 mt-4">
                                <Link
                                    to={`/users/${user.id}`}
                                    className="flex-1 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                                >
                                    View Details
                                </Link>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserList;
