import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const fetchDataSlice = createSlice({
  name: "fetchedData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
