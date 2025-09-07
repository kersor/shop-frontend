
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../utils/token'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Logout } from '../utils/logout'

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = getToken().token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
  credentials: "include"
})

const handlerBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    Logout()
  }

  return result
}

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: handlerBaseQuery,
  tagTypes: [
    "User",
    "Category",
    "Product",
    "Cart"
  ], 
  endpoints: (builder) => ({
  }),
})