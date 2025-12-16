import { configureStore } from "@reduxjs/toolkit";
import {api} from "./api";
import { getDefaultAutoSelectFamily } from "net";
import productsSliceReducer from './productsSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        products: productsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});