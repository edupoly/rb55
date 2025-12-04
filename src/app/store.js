import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/products";
import { pokemonApi } from "../services/pokemon";
import { imdbApi } from "../services/imbd";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "../services/todosApi";
export const store = configureStore({
  reducer: {
    cntR: counterReducer,
    todolistR: todoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [imdbApi.reducerPath]: imdbApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      pokemonApi.middleware,
      imdbApi.middleware,
      todosApi.middleware
    ),
});
setupListeners(store.dispatch);
