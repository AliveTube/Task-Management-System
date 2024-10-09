import { createSlice } from "@reduxjs/toolkit";

let initialState = {email:'hh',userName:'',password:'',confirmPass:''};
const RegisterSlice = createSlice({
    name:'RegisterData',
    initialState,
    reducers:{
        setRegisterData : (state,{payload})=>{
            state.email= payload.email;
            state.userName= payload.userName;
            state.password= payload.password;   
            state.confirmPass= payload.confirmPass;
        }
    },
})
export const {setRegisterData} = RegisterSlice.actions;
export const RegisterSliceReducer = RegisterSlice.reducer;