import { configureStore } from "@reduxjs/toolkit";
import { RegisterSliceReducer } from "../ReduxSlices/RegisterSlice";
import { TokenSliceReducer } from "../ReduxSlices/TokenSlice";

export const store = configureStore({
    reducer: {RegisterData: RegisterSliceReducer, TokenInUse : TokenSliceReducer}
})