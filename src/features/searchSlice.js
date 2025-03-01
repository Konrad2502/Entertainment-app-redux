import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'Search',
    initialState: '',
    reducers: {
        searchItems: (state, action) => action.payload
    }
});

export const { searchItems } = searchSlice.actions;
export default searchSlice.reducer;