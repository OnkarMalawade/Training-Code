import { create } from "zustand";

const useCommentStore = create((set) => ({
    comments: [],
    addComment: (comment) =>
        set((state) => ({ comments: [...state.comments, comment] })),
}));

export default useCommentStore;
