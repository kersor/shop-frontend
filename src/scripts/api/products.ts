import { Categories } from "../types/categories";
import { Product } from "../types/product";
import { rootApi } from "./rootApi";

interface GetAllProducts {
    category: string
}

export const productsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], GetAllProducts>({
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