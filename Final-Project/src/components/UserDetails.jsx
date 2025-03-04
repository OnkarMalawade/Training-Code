import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://dummyjson.com/users";

// Fetch User Details
const fetchUser = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};

const UserDetails = () => {
    const { id } = useParams();
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUser(id),
    });

    if (isLoading)
        return <p className="text-center text-gray-600">Loading user...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
                {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">
                <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600">
                <strong>Phone:</strong> {user.phone}
            </p>

            {/* Edit Button */}
            <Link
                to={`/users/edit/${user.id}`}
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
                Edit User
            </Link>
        </div>
    );
};

export default UserDetails;
