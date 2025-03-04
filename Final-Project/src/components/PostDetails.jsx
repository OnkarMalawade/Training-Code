import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import useCommentStore from "../auth/commentStore";

const API_URL = "https://dummyjson.com";

// Fetch Post Details
const fetchPost = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
};

// Fetch Comments
const fetchComments = async (postId) => {
    const response = await axios.get(`${API_URL}/comments`);
    return response.data.comments.filter(
        (comment) => comment.postId === parseInt(postId),
    );
};

// Add Comment
const addCommentApi = async (commentData) => {
    const response = await axios.post(`${API_URL}/comments/add`, commentData);
    return response.data;
};

const PostDetails = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { addComment } = useCommentStore();

    const {
        data: post,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id),
    });

    const { data: comments = [] } = useQuery({
        queryKey: ["comments", id],
        queryFn: () => fetchComments(id),
    });

    const [commentText, setCommentText] = useState("");

    const mutation = useMutation({
        mutationFn: addCommentApi,
        onSuccess: (newComment) => {
            queryClient.invalidateQueries(["comments", id]);
            addComment(newComment);
            setCommentText("");
        },
        onError: () => {
            alert("Failed to add comment.");
        },
    });

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        mutation.mutate({ postId: parseInt(id), body: commentText });
    };

    if (isLoading) return <p className="text-center">Loading post...</p>;
    if (error)
        return (
            <p className="text-center text-red-500">Error: {error.message}</p>
        );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p>{post.body}</p>

            {/* Comments Section */}
            <h3 className="text-xl font-bold mt-6">Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="mt-2 p-4 bg-gray-100 rounded">
                    <p>{comment.body}</p>
                </div>
            ))}

            {/* Add Comment */}
            <form onSubmit={handleCommentSubmit} className="mt-4">
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    className="border p-2 w-full rounded"
                    required
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default PostDetails;
