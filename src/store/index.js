import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter'
import watchlistSlice from './slices/watchListcart'
//el mkan eli bygma3 kol el reducers eli 3mltha  [configure store]


//dh kda law hreturn 7aga wa7da bs
//ms2ol 3n el update
export default configureStore({
    reducer:{
        //counter is the name of state that takes in use selector
        counter : counterSlice,

        //fav is the name of state that will be used in use selector
        fav : watchlistSlice
    }
})