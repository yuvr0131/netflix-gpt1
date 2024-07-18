import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import gptReducer from "./gptSlice";

import moviesReducer from "./movieSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
