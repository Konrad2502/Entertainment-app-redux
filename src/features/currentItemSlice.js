import { createSlice } from "@reduxjs/toolkit";

const currentItemSlice = createSlice({
    name: 'currentItem',
    initialState: null,
    reducers: {
        setCurrentItem: (state, action) => action.payload
    }
});

export const {setCurrentItem} = currentItemSlice.actions;
export default currentItemSlice.reducer;