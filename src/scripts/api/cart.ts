import { ReqDeleteProductInCart, ReqGetAllProductsInCart, ResToggleCountProductDto } from "../types/cart";
import { Categories } from "../types/categories";
import { Product } from "../types/product";
import { rootApi } from "./rootApi";

export interface ReqAddProductInCart {
    productId: string
}

export const cartApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        addProductCart: builder.mutation<any, ReqAddProductInCart>({
            query: (body: ReqAddProductInCart) => ({
                url: '/cart/add',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Cart"]
        }),
        toggleCountProductCart: builder.mutation<any, ResToggleCountProductDto>({
            query: (body: ResToggleCountProductDto) => ({
                url: '/cart/count',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Cart"]
        }),
        getProductCart: builder.query<ReqGetAllProductsInCart, void>({
            query: () => ({
                url: '/cart',
            }),
            providesTags: ["Cart"]
        }),
        getProductCountCart: builder.query<number, any>({
            query: () => ({
                url: '/cart/countTotal',
            }),
            providesTags: ["Cart"]
        }),
        deleteProductInCart: builder.mutation<any, ReqDeleteProductInCart>({
            query: (body: ReqDeleteProductInCart) => ({
                url: `/cart/${body.productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"]
        }),
    })
})

export const {
    useGetProductCountCartQuery,
    useDeleteProductInCartMutation,
    useToggleCountProductCartMutation,
    useAddProductCartMutation,
    useGetProductCartQuery
} = cartApi