import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter, resetCounter } from '../store/slices/counter';

export default function Counter() {

    //34an a use el redux gwa el component
    //use selector to get state
    //state => state sabta , .coutnter.value == .slicename (in config) .initialstate name (in js slice)
    const counterVal = useSelector(state => state.counter.value);
    //use dispatch to update state
    //dispatch takes action [el functions eli 3mltha fel counter.js ] increaseCounter, decreaseCounter, resetCounter
    //counterVal-1 like action.payload check counter.js
    const dispatch = useDispatch();

  return (
    <div className='d-flex align-items-center'>
      <button onClick={()=> dispatch(decreaseCounter(counterVal-1))} >-1</button>
      <p className='mx-5 mb-0'>{counterVal}</p>
      <button onClick={()=> dispatch(increaseCounter(counterVal+1))} >+1</button>
      <p className='mx-5 mb-0'></p>
      <button onClick={()=> dispatch(resetCounter())} >Reset</button>
    </div>
  )
}
