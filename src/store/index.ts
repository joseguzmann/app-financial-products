import {create} from 'zustand';
import {Product} from "@/types/product";

interface ProductStore {
    product: Product | null;
    setProduct: (product: Product) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    product: null,
    setProduct: (product: Product) => set({ product }),
}));

export {useProductStore};
