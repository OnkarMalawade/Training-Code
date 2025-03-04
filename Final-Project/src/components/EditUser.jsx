import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const API_URL = "https://dummyjson.com/users";

// Fetch User Details
const fetchUser = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};

// Update User API Call
const updateUserApi = async ({ id, updatedData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue } = useForm();

    // Fetch User Data
    const { data: user, isLoading } = useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUser(id),
        onSuccess: (data) => {
            setValue("firstName", data.firstName);
            setValue("lastName", data.lastName);
            setValue("email", data.email);
            setValue("phone", data.phone);
        },
    });

    // Mutation to update user
    const mutation = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries(["user", id]);
            alert("User updated successfully!");
            navigate(`/users/${id}`);
        },
        onError: () => {
            alert("Failed to update user.");
        },
    });

    if (isLoading)
        return <p className="text-center text-gray-600">Loading user...</p>;

    const onSubmit = (data) => {
        mutation.mutate({ id, updatedData: data });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit User</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    {...register("firstName", {
                        required: "First Name is required",
                    })}
                    placeholder="First Name"
                    className="border p-2 w-full rounded"
                />
                <input
                    type="text"
                    {...register("lastName", {
                        required: "Last Name is required",
                    })}
                    placeholder="Last Name"
                    className="border p-2 w-full rounded"
                />
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                    className="border p-2 w-full rounded"
                />
                <input
                    type="text"
                    {...register("phone", {
                        required: "Phone number is required",
                    })}
                    placeholder="Phone"
                    className="border p-2 w-full rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Update User
                </button>
            </form>
        </div>
    );
};

export default EditUser;
