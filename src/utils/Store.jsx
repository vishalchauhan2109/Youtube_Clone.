import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice"



const Store = configureStore({
  reducer: {
    app : appReducer,    
  },
});

export default Store;
