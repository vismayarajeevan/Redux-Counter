import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counterSlice'


const Counter = () => {

const {count} = useSelector(state=>state.counterReducer)
const dispatch = useDispatch()

  return (
    <div className="border rounded p-5 text-center mt-5">
    <h1 style={{fontSize:"100px"}}>{count}</h1>
    
     <div style={{width:'700px'}} className='d-flex justify-content-between my-5'>
       <button className='btn btn-warning'  >Decrement</button>
       <button className='btn btn-danger'  >Reset</button>
       <button className='btn btn-success' onClick={()=>dispatch(increment())} >Increment</button>
       </div>

       <div className='d-flex justify-content-evenly align-items-center'>
           <input type="text" placeholder='Increment counter amount' className='form-control'  />
           <button className='btn btn-primary ms-3' >Increment by amount</button> 
       </div>
 
    </div>
  )
}

export default Counter