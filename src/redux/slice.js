import { createSlice, nanoid } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0,
        users:[],
    },
    reducers:{
        increment: (v) => {
            v.value += 1
        },
        decrement: (v) => {
            v.value -= 1
        },
        addUser: (v,action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            v.users.push(data)
        },
        removeUser: (v,action) => {
            console.log(action)
        }
    }
})

export const {increment,decrement,addUser} = counterSlice.actions;
export default counterSlice.reducer
