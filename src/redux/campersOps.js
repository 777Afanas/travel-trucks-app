import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ізольований інстанс для TravelTrucks API
const campersApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

// Запит для отримання оголошень (фільтрація / пагінація)
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      // об'єкт фільтрів => params (Axios веретворить на ?location=Kyiv тощо)
      const response = await campersApi.get("/campers", { params: filters });
      // Мок-пагінація віддає об'єкт { items: [...] }, повертаємо response.data.items
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
