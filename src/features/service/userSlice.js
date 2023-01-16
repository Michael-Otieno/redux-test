import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  users:[],
  error:false,
  loading:false,
  success:false,
  message:""
} 

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    reset:(state) => initialState
  },
  extraReducers:(builder) =>{}
})

export const {reset} = userSlice.actions;
export default userSlice.reducer;