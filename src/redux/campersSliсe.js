import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./campersOps";

const initialState = {
  items: [],
  currentCamp: null,
  isLoading: false,
  error: null,
};

// Хелпери для уникнення дублювання коду
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      // Фетч усіх кемперів (Каталог)
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      // Фетч одного кемпера (Деталі)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamp = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

// Базові селектори
export const selectCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) => state.campers.currentCamp;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export default campersSlice.reducer;
