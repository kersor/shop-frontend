import { ReqDeleteProductInCart, ReqGetAllProductsInCart, ResToggleCountProductDto } from "../types/cart";
import { Categories } from "../types/categories";
import { CreateOrder, Order } from "../types/order";
import { Product } from "../types/product";
import { rootApi } from "./rootApi";


export const orderApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation<any, CreateOrder>({
            query: (body: CreateOrder) => ({
                url: '/order',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Order", "Cart", "Favorites"]
        }),

        getAllOrder: builder.query<Order[], void>({
            query: () => ({
                url: '/order',
            }),
            providesTags: ["Order"]
        }),
    })
})

export const {
    useGetAllOrderQuery,
    useCreateOrderMutation
} = orderApi