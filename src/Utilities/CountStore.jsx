import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";

export const CountStore = configureStore({
    reducer:{
        countReducer:CountSlice
    }
    
})