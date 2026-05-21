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
            const data = v.users.filter(v => v.id !== action.payload)
            v.users = data
        }
    }
})

export const {increment,decrement,addUser,removeUser} = counterSlice.actions;
export default counterSlice.reducer
