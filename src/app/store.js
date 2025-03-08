import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice"; 
import selectedItemsReducer from '../features/selectedItemsSlice';
import  searchReducer  from "../features/searchSlice";
import currentItemReducer from '../features/currentItemSlice';

const store = configureStore({
  reducer: {
    data: dataReducer, 
    selectedItems: selectedItemsReducer,
    search: searchReducer,
    currentItems: currentItemReducer
  },
});

export default store;