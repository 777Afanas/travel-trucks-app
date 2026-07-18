import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  AC: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  transmission: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // 1. Оновлюємо весь об'єкт фільтрів через Object.assign (без ручного спреду)
    changeFilters: (state, { payload }) => {
      Object.assign(state, payload);
    },
    // 2. Скидаємо до початкового стану через повернення initialState
    resetFilters: () => initialState,
  },
});

// 1. Іменований експорт екшенів для компонентів (напр. для CatalogPage)
export const { changeFilters, resetFilters } = filtersSlice.actions;

// 2. Іменований експорт селектора для читання стану
export const selectActiveFilters = (state) => state.filters;

// 3. ДЕФОЛТНИЙ експорт редюсера для підключення в store.js
export default filtersSlice.reducer;
