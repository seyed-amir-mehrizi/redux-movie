
import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = {
    movies : []
}

const movieSlice = createSlice({
    name : "movies" , 
    initialState,
    reducers:{
        addMovies:(state , {payload})=>{
            state.movies = payload
        },

    }
});

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) =>state.movies.movies