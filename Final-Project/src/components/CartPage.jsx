import React from "react";
import useCartStore from "../auth/cartStore";

const CartPage = () => {
    const { cart, removeFromCart, totalPrice } = useCartStore();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Shopping Cart
            </h2>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between border-b py-2"
                        >
                            <div>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <h3 className="text-gray-700">{item.title}</h3>
                                <p className="text-gray-500">
                                    Qty: {item.quantity}
                                </p>
                                <p className="text-gray-500">
                                    Price: ${item.price}
                                </p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 p-4 bg-gray-100 rounded">
                        <h3 className="text-lg font-semibold">
                            Total: ${totalPrice()}
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
