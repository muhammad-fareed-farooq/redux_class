import { createSlice } from '@reduxjs/toolkit'

const initailstate  = {
    value :0,
    value1 :"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    class:"react",
    module : "b"
}

 const counterSlice = createSlice({
    
    name: 'counter',
    initialState:initailstate,
    
    reducers:{
       increment: (state)=>{
        state.value += 1
       }
    }

})

export default counterSlice.reducer