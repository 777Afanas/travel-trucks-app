import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ізольований інстанс для TravelTrucks API
const campersApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ filters, page }, thunkAPI) => {
    try {
      const activeParams = {};

      if (filters) {
        Object.keys(filters).forEach((key) => {
          const value = filters[key];
          // Залишаємо лише непусті рядки та true прапорці
          if (
            (typeof value === "string" && value.trim() !== "") ||
            value === true
          ) {
            activeParams[key] = value;
          }
        });
      }

      const response = await campersApi.get("/campers", {
        params: { ...activeParams, page, limit: 4 },
      });

      return response.data;
    } catch (error) {
      // Ідеально для відлову 404 від MockAPI без крашу Redux-стейту
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
