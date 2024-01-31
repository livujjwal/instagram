import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import validationReducer from "./validationSlice";
import jokeReducer from "./jokeSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    validation: validationReducer,
    joke: jokeReducer,
  },
});
export default store;
