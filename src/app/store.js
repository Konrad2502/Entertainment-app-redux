import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice"; 
import selectedItemsReducer from '../features/selectedItemsSlice';
const store = configureStore({
  reducer: {
    data: dataReducer, 
    selectedItems: selectedItemsReducer,
  },
});

export default store;