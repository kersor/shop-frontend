import { Categories } from "../types/categories";
import { ReqGetAllProductInFavorites } from "../types/favorites";
import { rootApi } from "./rootApi";

export interface ReqAddProductInFavorite {
    productId: string
}

export const favoritesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFavorites: builder.query<ReqGetAllProductInFavorites[], any>({
            query: () => ({
                url: '/favorites'
            }),
            providesTags: ["Favorites", "Product"]
        }),
        toggleFavoriteProduct: builder.mutation<any, ReqAddProductInFavorite>({
            query: (body: ReqAddProductInFavorite) => ({
                url: '/favorites/toggle',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Favorites", "Product", "Count"]
        }),
    })
})

export const {
    useGetAllFavoritesQuery,
    useToggleFavoriteProductMutation
} = favoritesApi