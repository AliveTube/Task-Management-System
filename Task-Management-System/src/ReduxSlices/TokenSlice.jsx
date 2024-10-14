import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
    name:"TokenSlice",
    initialState:"",
    reducers: {
        setTokenSlice: (state,{payload})=>{
            state = payload;
        }
    } 
})

export const { setTokenSlice } = TokenSlice.actions;
export const TokenSliceReducer = TokenSlice.reducer;