import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice"; // Importujemy slice

const store = configureStore({
  reducer: {
    data: dataReducer, // Dodajemy do store
  },
});

export default store;