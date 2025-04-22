import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
             state.count++
        },
        decrement:(state)=>{
            state.count--
        }
    }
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer