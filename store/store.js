import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./films/films.slice";
import userSlice from "./user/user.slice";

export const store = configureStore({
    reducer: {
        films: filmsSlice,
        user: userSlice
    },
})