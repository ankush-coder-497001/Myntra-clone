import {createSlice} from "@reduxjs/toolkit"

const FetchLoaderSlice = createSlice({
  name:"fetchLoader",
  initialState:{
    fetching:true
  },
  reducers:{
  fetchStart:(state,action)=>{
    state.fetching=action.payload
  },
  fetchEnd:(state,action)=>{
    state.fetching=action.payload
  },
  }
})
export const LoaderActions = FetchLoaderSlice.actions;
export default FetchLoaderSlice;