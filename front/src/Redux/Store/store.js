import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../Redux/Reducer/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
