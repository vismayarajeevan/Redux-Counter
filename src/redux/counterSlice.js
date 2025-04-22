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
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,valueGiven)=>{
            state.count += valueGiven.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer