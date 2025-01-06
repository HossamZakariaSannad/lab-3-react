import { createSlice } from "@reduxjs/toolkit";

//we need array to store the cards
const initialState = {
    value: [],//
};

const watchlistSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        //reducers to update array
        addToWatchlist: (state, action) => {
            state.value.push(action.payload);
          },
        removeFromWatchlist: (state, action) => {
         state.value = state.value.filter((e) => e.id !== action.payload);
        },
        
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
