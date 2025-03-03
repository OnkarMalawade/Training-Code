import { create } from "zustand";

const useAuthStore = create((set) => ({
    token: null,
    // login: () => set((state) => ({ token: state.token })),
    login: (newToken) => set({ token: newToken }),
    logout: () => set({ token: null }),
}));

export default useAuthStore;
