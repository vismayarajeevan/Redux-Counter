import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount, reset } from '../redux/counterSlice'
import { decrement } from '../redux/counterSlice'


const Counter = () => {

const {count} = useSelector(state=>state.counterReducer)
const dispatch = useDispatch()

// state to hold the value of increment by count in input tag
const [amount,setAmount] = useState(0)

const handleIncrementByCount =()=>{
    if(amount){
        dispatch(incrementByAmount(+amount))

    }else{
        alert("Please enter an amount")
    }
}

  return (
    <div className="border rounded p-5 text-center mt-5">
    <h1 style={{fontSize:"100px"}}>{count}</h1>
    
     <div style={{width:'700px'}} className='d-flex justify-content-between my-5'>
       <button className='btn btn-warning' onClick={()=>dispatch(decrement())} >Decrement</button>
       <button className='btn btn-danger'  onClick={()=>dispatch(reset())}>Reset</button>
       <button className='btn btn-success' onClick={()=>dispatch(increment())} >Increment</button>
       </div>

       <div className='d-flex justify-content-evenly align-items-center'>
           <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Increment counter amount' className='form-control'  />
           <button className='btn btn-primary ms-3' onClick={handleIncrementByCount} >Increment by amount</button> 
       </div>
 
    </div>
  )
}

export default Counter