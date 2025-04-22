import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
             state.count++
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer