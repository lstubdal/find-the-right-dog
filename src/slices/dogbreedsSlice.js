import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dogbreeds: []   
}

export const dogbreedsSlice = createSlice({
    name: 'dogbreeds',
    initialState,
    reducers: {
        filter: (state) => {
           // filter based dogbreeds
        }
    }
})

export const { filter } = dogbreedsSlice.actions; // Action creator for the reducer

export default dogbreedsSlice.reducer;
