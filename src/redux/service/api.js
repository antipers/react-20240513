import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) =>
    builder.query({
      getRestaurants: builder.query({
        query: () => ({ url: "restaurants" }),
      }),
    }),
});


export const {useGetRestaurants}= apiService;