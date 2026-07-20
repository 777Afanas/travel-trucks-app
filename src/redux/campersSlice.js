import { createSlice, createSelector } from "@reduxjs/toolkit";
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

        // const newCampers = action.payload?.items || [];
        const newCampers = action.payload?.items || action.payload || []; // обробка різних форматів відповіді MockAPI

        // Фільтруємо нові картки: додаємо ті, id яких ще НЕМАЄ в стейті
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

// Базові селектори
export const selectCampers = (state) => state.campers.items;
export const selectPage = (state) => state.campers.page;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectCamperDetails = (state) => state.campers.currentCamp;

// Мемоізований селектор для клієнтської фільтрації (Захист від 404)
export const selectFilteredCampers = createSelector(
  [selectCampers, (state) => state.filters],
  (items, filters) => {
    return items.filter((camper) => {
      if (filters.location) {
        const camperLocation = camper.location.toLowerCase().trim();
        const searchLocation = filters.location.toLowerCase().trim();

        if (!camperLocation.includes(searchLocation)) {
          return false;
        }
      }

      // 2. Фільтр: Тип кузова (form)
      if (filters.form && camper.form !== filters.form) {
        return false;
      }
      // 3. Фільтр: Двигун (engine)
      if (filters.engine && camper.engine !== filters.engine) {
        return false;
      }
      // 4. Фільтр: Трансмісія (transmission)
      if (
        filters.transmission &&
        camper.transmission !== filters.transmission
      ) {
        return false;
      }
      // 5. Мультивибір: Обладнання (Equipment)
      if (filters.AC && camper.AC !== true) return false;
      if (filters.kitchen && camper.kitchen !== true) return false;
      if (filters.TV && camper.TV !== true) return false;
      if (filters.bathroom && camper.bathroom !== true) return false;

      return true;
    });
  },
);

export default campersSlice.reducer;
