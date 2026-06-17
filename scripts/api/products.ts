import { Product } from "../types/product"
import { api } from "./axios"

export const productsApi = {
    async getAll(params?: any) {
        const { data } = await api.get<Product[]>('/products', {
            params: params
        })
        
        return data
    }
}