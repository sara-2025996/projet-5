import { configureStore } from "@reduxjs/toolkit";
import reducer from "./employeSlice";

const store=configureStore({
    reducer:{
        employees:reducer
    }
})

export default store