import { Register } from "../types/auth";
import { rootApi } from "./rootApi";


export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<any, Register>({
            query: (body) => ({
                url: "/user",
                body: body,
                method: "POST"
            })
        })
    })
})

export const {
    useRegisterMutation
} = authApi