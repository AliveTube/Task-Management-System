import { createSlice } from "@reduxjs/toolkit";

let RegisterData = { email: '', userName: '', password: '', confirmPass: '' };
let isAcceptedInput = {
    notEmpty: { email: 1, userName: 1, password: 1, confirmPass: 1 },
    notShortNorLong: { email: 1, password: 1 },
    validFormat: { email: 1, password: 1 },
    match: { confirmPass: 1 }
};
let isValidInput = { email: 1, userName: 1, password: 1, confirmPass: 1 };

const RegisterSlice = createSlice({
    name: 'RegisterSlice',
    initialState: { RegisterData: RegisterData, isAcceptedInput: isAcceptedInput, isValidInput: isValidInput},
    reducers: {
        setRegisterData: (state, { payload }) => {
            state.RegisterData.email = payload.email;
            state.RegisterData.userName = payload.userName;
            state.RegisterData.password = payload.password;
            state.RegisterData.confirmPass = payload.confirmPass;
        },
        setValidInput: (state, { payload }) => {
            state.isValidInput = payload;
        },
        setInputNotEmpty: (state, { payload }) => {
            state.isAcceptedInput.notEmpty[payload.element] = payload.value;
        },
        setInputNotShortNorLong: (state, { payload }) => {
            state.isAcceptedInput.notShortNorLong[payload.element] = payload.value;
        },
        setInputValidFormat: (state, { payload }) => {
            state.isAcceptedInput.validFormat[payload.element] = payload.value;
        },
        setInputMatch: (state, { payload }) => {
            state.isAcceptedInput.match[payload.element] = payload.value;
        },
    },
})

export const { setRegisterData, setInputNotEmpty, setInputNotShortNorLong,
    setInputValidFormat, setInputMatch } = RegisterSlice.actions;
export const RegisterSliceReducer = RegisterSlice.reducer;
