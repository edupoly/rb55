// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const imdbApi = createApi({
  reducerPath: "imdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.imdbapi.dev" }),
  endpoints: (builder) => ({
    getAllTitles: builder.query({
      query: () => `/titles`,
    }),
    getCreditsByTitleId: builder.query({
      query: (tid) => {
        return `/titles/${tid}/credits`;
      },
    }),
    getCrewDetailsByNameId: builder.query({
      query: (nid) => {
        return `/names/${nid}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTitlesQuery,
  useGetCreditsByTitleIdQuery,
  useGetCrewDetailsByNameIdQuery,
} = imdbApi;
