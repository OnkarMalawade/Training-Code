import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://dummyjson.com/posts";

// Fetch Posts
const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data.posts;
};

const PostList = () => {
    const {
        data: posts = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p className="text-center">Loading posts...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Blog Posts</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-600">
                            {post.body.slice(0, 100)}...
                        </p>
                        <Link
                            to={`/posts/${post.id}`}
                            className="block text-center bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
