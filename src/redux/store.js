import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./sliсe";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
