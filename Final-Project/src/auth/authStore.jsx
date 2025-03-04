import { create } from "zustand";

// Load token from localStorage (if exists)
const storedToken = localStorage.getItem("token") === "true";

const useAuthStore = create((set) => ({
    token: storedToken, // Set initial state from localStorage

    login: () => {
        localStorage.setItem("token", "true"); // Save token to localStorage
        set({ token: true });
    },

    logout: () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        set({ token: false });
    },
}));

export default useAuthStore;
