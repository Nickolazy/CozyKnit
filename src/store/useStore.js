import create from "zustand"

const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}))

export default useStore
