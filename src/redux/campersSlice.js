import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./campersOps";

const initialState = {
  items: [],
  page: 1,
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
  reducers: {
    // Інкремент сторінки для Load More
    changePage: (state) => {
      state.page += 1;
    },
    // Скидання даних перед новим пошуком/фільтрацією
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Каталог оголошень - Фетч усіх кемперів (Каталог з пагінацією)
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;

        const newCampers = action.payload?.items || [];

        // Фільтруємо нові картки: додаємо лише ті, id яких ще НЕМАЄ в стейті
        const uniqueCampers = newCampers.filter(
          (newCamper) =>
            !state.items.some((existing) => existing.id === newCamper.id),
        );

        state.items.push(...uniqueCampers);
      })
      .addCase(fetchCampers.rejected, handleRejected)

      // Деталі одного кемпера
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamp = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

// Експорт екшенів з reducers
export const { changePage, resetCampers } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectPage = (state) => state.campers.page;
export const selectCamperDetails = (state) => state.campers.currentCamp;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export default campersSlice.reducer;
