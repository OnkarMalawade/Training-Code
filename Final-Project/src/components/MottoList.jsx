import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const QUOTES_API = "https://dummyjson.com/quotes";
const RECIPES_API = "https://dummyjson.com/recipes";

// Fetch Quotes
const fetchQuotes = async () => {
    try {
        const response = await axios.get(QUOTES_API);
        console.log("Quotes API Response:", response.data); // ✅ Debugging
        return response.data.quotes || []; // ✅ Ensure it's always an array
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return [];
    }
};

// Fetch Recipes
const fetchRecipes = async () => {
    try {
        const response = await axios.get(RECIPES_API);
        console.log("Recipes API Response:", response.data); // ✅ Debugging
        return response.data.recipes || []; // ✅ Ensure it's always an array
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

const MottoList = () => {
    const {
        data: quotes = [],
        isLoading: quotesLoading,
        error: quotesError,
    } = useQuery({
        queryKey: ["quotes"],
        queryFn: fetchQuotes,
    });

    const {
        data: recipes = [],
        isLoading: recipesLoading,
        error: recipesError,
    } = useQuery({
        queryKey: ["recipes"],
        queryFn: fetchRecipes,
    });

    if (quotesLoading || recipesLoading)
        return <p className="text-center">Loading...</p>;

    if (quotesError || recipesError)
        return <p className="text-center text-red-500">Error loading data</p>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Quotes & Recipes Dashboard
            </h2>

            {/* Motivational Quotes Section */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                    Motivational Quotes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quotes.length > 0 ? (
                        quotes.slice(0, 6).map((quote) => (
                            <div
                                key={quote.id}
                                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg"
                            >
                                <p className="text-gray-700 italic">
                                    "{quote.quote}"
                                </p>
                                <p className="text-gray-600 font-semibold mt-2">
                                    - {quote.author}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            No quotes available.
                        </p>
                    )}
                </div>
            </div>

            {/* Recipes Section */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Recipes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.length > 0 ? (
                        recipes.slice(0, 6).map((recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg"
                            >
                                <h4 className="text-lg font-bold">
                                    {recipe.name}
                                </h4>
                                <p className="text-gray-600 mt-2">
                                    {recipe.description
                                        ? recipe.description.slice(0, 80)
                                        : "No description available."}
                                    ...
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            No recipes available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MottoList;
