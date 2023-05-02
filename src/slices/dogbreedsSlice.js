import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allBreeds: []   
}

export const dogBreedsSlice = createSlice({
    name: 'dogBreeds',
    initialState,
    reducers: {
        addAllBreeds: (state, dog) => {
           state.allBreeds.push(dog)
        }
    }
})

export const { addAllBreeds } = dogBreedsSlice.actions; // Action creator for the reducer

export default dogBreedsSlice.reducer;
