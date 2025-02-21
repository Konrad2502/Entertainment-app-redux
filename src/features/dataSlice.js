import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asynchroniczne pobieranie danych z `data.json`
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/data.json");
  return response.json();

});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Zapisujemy dane w stanie Redux
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = "Błąd pobierania danych";
      });
  },
});

export default dataSlice.reducer;
