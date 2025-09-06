
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../utils/token'

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = getToken().token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
  credentials: "include"
})

// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQuery,
  tagTypes: [
    "User",
    "Category"
  ], 
  endpoints: (builder) => ({
  }),
})