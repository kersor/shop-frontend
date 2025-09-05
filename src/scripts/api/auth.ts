import { url } from "inspector";
import { Auth } from "../types/auth";
import { User } from "../types/user";
import { rootApi } from "./rootApi";

export interface ResponseAuth {
    user: User,
    access_token: string
}

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ResponseAuth, Auth>({
            query: (body) => ({
                url: "/auth/register",
                body: body,
                method: "POST"
            }),
            invalidatesTags: ["User"]
        }),
        login: builder.mutation<ResponseAuth, Auth>({
            query: (body) => ({
                url: "/auth/login",
                body: body,
                method: "POST"
            }),
            invalidatesTags: ["User"]
        }),
        self: builder.query<any, any>({
            query: () => ({
                url: "/user/self"
            }),
            providesTags: ["User"]
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useSelfQuery
} = authApi