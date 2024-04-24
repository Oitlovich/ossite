import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./films/films.slice";

export const store = configureStore({
    reducer: {
        films: filmsSlice
    },
})