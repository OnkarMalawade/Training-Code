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
                            className="max-w-sm w-full lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
                                style={{
                                    backgroundImage: `url(${user.image})`,
                                }}
                                title={user.firstName}
                            ></div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <svg
                                            className="fill-current text-gray-500 w-3 h-3 mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Members only
                                    </p>
                                    <div className="text-gray-900 font-bold text-xl mb-2">
                                        {user.firstName} {user.lastName}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Email: {user.email}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        Phone: {user.phone}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src={user.image}
                                        alt={`Avatar of ${user.firstName}`}
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">
                                            {user.username}
                                        </p>
                                        <p className="text-gray-600">
                                            {user.birthDate}
                                        </p>
                                    </div>
                                </div>
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserList;
