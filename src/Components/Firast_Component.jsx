import React from 'react'
import { useSelector } from 'react-redux'

export default function Firast_Component() {

    const state = useSelector((state)=>state.counter.value1)
  return (
    <div>
          {/* <h1> Value : {state}</h1>  */}
          <img width="20%" src={state} alt="" />  
    </div>
  )
}
