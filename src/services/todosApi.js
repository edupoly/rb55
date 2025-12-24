// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return {
          url: `/getAllTodos`,
          method: "GET",
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    getTodosByUserName: builder.query({
      query: (username) => {
        return {
          url: `/getTodosByUserName/${username}`,
          method: "GET",
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    addNewTodo: builder.mutation({
      query: (ntd) => {
        return {
          url: "/addNewTodo",
          method: "POST",
          headers: {
            token: window.localStorage.getItem("token"),
          },
          body: ntd,
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useGetTodosByUserNameQuery,
  useLazyGetTodosByUserNameQuery,
  useLazyGetAllTodosQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
