import { createSlice } from "@reduxjs/toolkit";

let RegisterData = { email: '', username: '', password: '', confirmPass: '' };
let isValidInput = { email: 1, userName: 1, password: 1, confirmPass: 1 };

const RegisterSlice = createSlice({
    name: 'RegisterSlice',
    initialState: { RegisterData: RegisterData, isValidInput: isValidInput },
    reducers: {
        setRegisterData: (state, { payload }) => {
            state.RegisterData.email = payload.email;
            state.RegisterData.username = payload.userName;
            state.RegisterData.password = payload.password;
            state.RegisterData.confirmPass = payload.confirmPass;
        },
        setValidInput: (state, { payload }) => {
            state.isValidInput[payload.element] = payload.value;
        },
    },
})

export const { setRegisterData, setValidInput } = RegisterSlice.actions;
export const RegisterSliceReducer = RegisterSlice.reducer;
