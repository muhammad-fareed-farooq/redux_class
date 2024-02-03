import React from 'react'
import { RouterProvider,Route } from 'react-router'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../Pages/Home'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path='' element={<Home/>}/>
        </Route>
    )
)

export default function Router_App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
