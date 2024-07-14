import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import { useReducer } from "react";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});
export default appStore;
