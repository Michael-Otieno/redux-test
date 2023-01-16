import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./service/userSlice";

export default configureStore({
  reducer:{
    user:userSlice
  }
})