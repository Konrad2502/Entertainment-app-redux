import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice"; 
import selectedItemsReducer from '../features/selectedItemsSlice';
import  searchReducer  from "../features/searchSlice";

const store = configureStore({
  reducer: {
    data: dataReducer, 
    selectedItems: selectedItemsReducer,
    search: searchReducer,
  },
});

export default store;