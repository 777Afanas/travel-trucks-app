import { createSlice } from "@reduxjs/toolkit";

// Початковий стан слайсу
const initialState = {
  items: [], // Тут будуть зберігатися наші кемпери
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    // Тимчасові екшени-заглушки для розробки
    setCampers: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Експортуємо екшени для використання в компонентах (через dispatch)
export const { setCampers, setLoading, setError } = campersSlice.actions;

// Експортуємо редьюсер за замовчуванням для нашого Store
export default campersSlice.reducer;
