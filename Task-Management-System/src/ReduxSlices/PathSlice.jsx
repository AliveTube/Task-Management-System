import { createSlice } from "@reduxjs/toolkit";

let FolderName = localStorage.getItem('FolderName') || "";
let TodoListName = localStorage.getItem('TodoListName') || "";
let TaskName = localStorage.getItem('TaskName') || "";

const initialState = { FolderName, TodoListName, TaskName };

const PathSlice = createSlice({
    name: "PathSlice",
    initialState,
    reducers: {
        setPath: (state, { payload }) => {
            localStorage.setItem(payload.type, payload.value);
            return { ...state, [payload.type]: payload.value };
        },
        clearPath: (state) => {
            localStorage.removeItem('FolderName');
            localStorage.removeItem('TodoListName');
            localStorage.removeItem('TaskName');
            return '';
        }
    }
})

export const { setPath, clearPath } = PathSlice.actions;
export const PathSliceReducer = PathSlice.reducer;