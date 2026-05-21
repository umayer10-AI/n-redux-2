import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: (v) => {
            v.value += 1
        },
        decrement: (v) => {
            v.value -= 1
        },
    }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer
