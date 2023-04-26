import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false   // set alue to false by default to hide sidebar
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value 
        }
    }
})

export const { toggle } = menuSlice.actions; // Action creator for the reducer

export default menuSlice.reducer;
