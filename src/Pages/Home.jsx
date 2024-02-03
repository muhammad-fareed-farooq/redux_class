import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {

    const state =  useSelector((state)=>state.counter)
    console.log(state);
    
  return (
    <div style={{display:"flex "}}>
      <h1>home</h1>
      <button>login</button>
    </div>
  )
}
