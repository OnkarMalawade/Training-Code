import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],

    addToCart: (product) => {
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.id === product.id,
            );
            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                };
            } else {
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }
        });
    },

    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        }));
    },

    totalPrice: () => {
        return useCartStore
            .getState()
            .cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },

    // ✅ Get total cart items count
    totalItems: () => {
        return useCartStore
            .getState()
            .cart.reduce((acc, item) => acc + item.quantity, 0);
    },
}));

export default useCartStore;
