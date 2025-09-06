import { Categories } from "../types/categories";
import { rootApi } from "./rootApi";

export const categoriesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAll: builder.query<Categories[], void>({
            query: () => ({
                url: '/category'
            }),
            providesTags: ["Category"]
        })
    })
})

export const {
    useGetAllQuery
} = categoriesApi