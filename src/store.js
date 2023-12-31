import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20},
    reducer : {
        changeName(state) {
            state.name = 'park'

        }
    }
})

export let { changeName } = user.actions

let cart = createSlice({
    name : 'user',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ]
})







export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 