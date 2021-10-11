import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Reducers/counterSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})