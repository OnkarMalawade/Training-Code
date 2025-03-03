import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
    carts: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, carts: action.payload, loading: false };
        case "FETCH_ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const Carts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/carts",
                );
                dispatch({ type: "FETCH_SUCCESS", payload: response.data });
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message });
            }
        };
        fetchCarts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {state.loading ? (
                <p className="text-center text-lg font-semibold">Loading...</p>
            ) : state.error ? (
                <p className="text-center text-red-500 font-semibold">
                    {state.error}
                </p>
            ) : (
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Carts ({state.carts.length})
                    </h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {state.carts.map((cart) => (
                            <div
                                key={cart.id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold text-gray-700">
                                    Cart ID:{" "}
                                    <span className="text-blue-500">
                                        {cart.id}
                                    </span>
                                </h2>
                                <p className="text-gray-600">
                                    Products: {cart.products.length}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {cart.products.map((product) => (
                                        <li
                                            key={product.productId}
                                            className="bg-gray-50 p-3 rounded-lg shadow-sm"
                                        >
                                            <h3 className="text-gray-800 font-medium">
                                                Product ID: {product.productId}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Quantity: {product.quantity}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carts;
