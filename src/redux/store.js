import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSliсe";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
