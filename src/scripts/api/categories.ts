import { Categories } from "../types/categories";
import { rootApi } from "./rootApi";

export const categoriesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<Categories[], void>({
            query: () => ({
                url: '/category'
            }),
            providesTags: ["Category"]
        })
    })
})

export const {
    useGetAllCategoriesQuery
} = categoriesApi