import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    genres: [],
    age: [],
    // date: [],
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        changeGenre: (state, action) => {
            if(!action.payload.checked) {
                state.genres = state.genres.filter(p => p !== action.payload.slug)
            }
            else {
                state.genres.push(action.payload.slug)
            }
        },
        changeAge: (state, action) => {
            if(!action.payload.checked) {
                state.age = state.age.filter(p => p !== action.payload.age)
            }
            else {
                state.age.push(action.payload.age)
            }
        },
        // changeDate: (state, action) => {
        //     state.date = action.payload
        // },
    },
})

export const { changeGenre, changeAge, changeDate } = filmsSlice.actions

export default filmsSlice.reducer