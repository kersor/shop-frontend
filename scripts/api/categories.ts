import { Category } from "../types/categories"
import { api } from "./axios"

export const categoriesApi = {
    async getCatalog() {
        const { data } = await api.get<Category[]>('/categories/catalog')
        return data
    }
}