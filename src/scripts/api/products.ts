import { Categories } from "../types/categories";
import { Product } from "../types/product";
import { rootApi } from "./rootApi";

interface GetAllProducts {
    category: string
    page: number
}

export interface ResGetAllProducts {
    data: Product[]
    remainingPages: number
    totalPages: number
}

export const productsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<ResGetAllProducts, GetAllProducts>({
            query: (query: GetAllProducts) => ({
                url: '/product',
                params: query
            }),
            providesTags: ["Product"]
        })
    })
})

export const {
    useGetAllProductsQuery
} = productsApi