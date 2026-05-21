import { configureStore } from "@reduxjs/toolkit";
import counterProvider from '../redux/slice'

export const store = configureStore({
    reducer: {
        counter: counterProvider
    }
})