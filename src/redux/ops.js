import { createAsyncThunk } from "@reduxjs/toolkit";

// Тимчасова заглушка для тестування сторінки деталей
export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      // Поки бекенд не підключено, просто повертаємо id
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
