import { createSlice } from "@reduxjs/toolkit";
//slice de ahm 7aga 

//initial values for slice
const initialState = {
  value: 0,
  maxCounter: 100,
};
// goz2 mn el data shared globally
// takes name , initialstate , reducers
const counterSlice = createSlice({
  name: "counter",
  initialState,
  //reucers : el function el ms2ola 3n el update bel value el gdeda
  reducers: {
    increaseCounter: (state, action) => {
      state.value = action.payload;
    },
    decreaseCounter: (state, action) => {
      state.value = action.payload;
    },
    resetCounter: (state) => {
      state.value =0;
    },
  },
});

export const { increaseCounter, decreaseCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
