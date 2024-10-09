import { configureStore } from "@reduxjs/toolkit";
import { RegisterSliceReducer } from "../ReduxSlices/RegisterSlice";

export const store = configureStore({
    reducer: {RegisterData: RegisterSliceReducer}
})