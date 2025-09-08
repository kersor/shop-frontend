import { ReqDeleteProductInCart, ReqGetAllProductsInCart, ResToggleCountProductDto } from "../types/cart";
import { Categories } from "../types/categories";
import { Product } from "../types/product";
import { rootApi } from "./rootApi";

export interface ReqAddProductInCart {
    productId: string
}

export interface ReqGetProductCountCartAndFavorite {
    countCart: number
    countFavorite: number
}

export const cartApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        addProductCart: builder.mutation<any, ReqAddProductInCart>({
            query: (body: ReqAddProductInCart) => ({
                url: '/cart/add',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Cart", "Product"]
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
        getProductCountCartAndFavorite: builder.query<ReqGetProductCountCartAndFavorite, any>({
            query: () => ({
                url: '/cart/countTotalCartAndFavorite',
            }),
            providesTags: ["Cart", "Count"]
        }),
        deleteProductInCart: builder.mutation<any, ReqDeleteProductInCart>({
            query: (body: ReqDeleteProductInCart) => ({
                url: `/cart/${body.productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart", "Favorites"]
        }),
    })
})

export const {
    useGetProductCountCartAndFavoriteQuery,
    useDeleteProductInCartMutation,
    useToggleCountProductCartMutation,
    useAddProductCartMutation,
    useGetProductCartQuery
} = cartApi