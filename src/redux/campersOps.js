import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ізольований інстанс для TravelTrucks API
const campersApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page }, thunkAPI) => {
    // Прибираємо фільтри з параметрів URL запиту
    try {
      const response = await campersApi.get("/campers", {
        params: { page, limit: 4 }, // Пагінація залишається нативною
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Запит для отримання деталей конкретного кемпера за ID
export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await campersApi.get(`/campers/${id}`);
      // Повертаємо дані одного конкретного кемпера (об'єкт, не масив items)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
