import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    addData: builder.mutation({
      query: (newData) => ({
        url: "/posts",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetDataQuery, useAddDataMutation } = serverApi;
