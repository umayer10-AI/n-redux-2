import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: (v) => {
            v.value += 1
        }
    }
})

export const {increment} = counterSlice.actions;
export default counterSlice.reducer
