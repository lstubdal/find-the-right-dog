import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allBreeds: []  // get data from fethcing
}

export const dogBreedsSlice = createSlice({
    name: 'dogBreeds',
    initialState,
    reducers: {
        addAllBreeds: (state, action) => {
           state.allBreeds = action.payload;
        }
    }
})

export const { addAllBreeds } = dogBreedsSlice.actions; // Action creator for the reducer

export default dogBreedsSlice.reducer;
