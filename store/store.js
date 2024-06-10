import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./films/films.slice";
import userSlice from "./user/user.slice";
import favoriteReducer from "./favorite/favorite.slice";

export const store = configureStore({
    reducer: {
        films: filmsSlice,
        user: userSlice,
        favorites: favoriteReducer
    },
})