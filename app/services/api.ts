import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: ()=> "/products/categories",
        }),
        getProductsByCategory: builder.query({
            query: (slug:string) => `/products/category/${slug}`
        })
    }),
});

export const {useGetCategoriesQuery, useGetProductsByCategoryQuery} = api;