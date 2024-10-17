import { configureStore } from "@reduxjs/toolkit";
import { RegisterSliceReducer } from "../ReduxSlices/RegisterSlice";
import { TokenSliceReducer } from "../ReduxSlices/TokenSlice";
import { PathSliceReducer } from "../ReduxSlices/PathSlice";

export const store = configureStore({
    reducer: {RegisterData: RegisterSliceReducer, TokenInUse : TokenSliceReducer, Path : PathSliceReducer}
})