import create from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));

export default useStore;
