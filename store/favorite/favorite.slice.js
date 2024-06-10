import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavorite } from '@/services/favorites';


export const getFavorites = createAsyncThunk(
  'user/favorites',
  async (jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });

    if(!response.ok) {
      localStorage.removeItem('userJWT')
      localStorage.removeItem('userData')

      window.location.href = window.location.pathname
    }
    return response.json();
  }
);


const initialState = {
  items: null,
  loading: 'idle',
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      const film = action.payload.film
      const isExist = state.items.favorite.some(p => p.id === film.id)

      if(isExist) {
        state.items.favorite = state.items.favorite.filter(p => p.id !== film.id)
      }
      else {
        state.items.favorite.push(film)
      }

      addFavorite(action.payload.jwt, action.payload.userId, state.items.favorite)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

export const { changeFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer