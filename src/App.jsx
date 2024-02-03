import React from 'react'
import { useSelector } from 'react-redux'
import Firast_Component from './Components/Firast_Component'
import Router_App from './Config/Router_App'

export default function App() {

  const state = useSelector((state)=>state.counter.value)
  // console.log(state);

  return (
    <div>
      <Router_App/>
    {/* <h1> Value : {state}</h1> */}
    {/* <Firast_Component/> */}

    </div>
  )
}
