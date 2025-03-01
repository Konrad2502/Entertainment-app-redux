import { createSlice } from "@reduxjs/toolkit";

const selectedItemsSlice = createSlice({
    name: 'selectedItems',
    initialState : {
        movies: [],
        tvseries: []
    },
    reducers: {
        toogleItems: (state, action) => {
            const item = action.payload;
            const { id, category } = item;

            if (category === 'Movie') {
                const index = state.movies.findIndex(movie => movie.id === id);
                if (index >= 0) {
                    state.movies.splice(index, 1); 
                } else {
                    state.movies.push(item); 
                }
            } else if (category === 'TV Series') {
                const index = state.tvseries.findIndex(series => series.id === id);
                if (index >= 0) {
                    state.tvseries.splice(index, 1); 
                } else {
                    state.tvseries.push(item); 
                }
            }
        },
        removeAll: (state, action) => {
            const category = action.payload;
            console.log(category)

            if (category === 'Movie') {
                state.movies = [];
            }
          else if (category === 'TV Series') {
            state.tvseries = []
        }
          }
           

    }
});

export const { toogleItems, removeAll } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
