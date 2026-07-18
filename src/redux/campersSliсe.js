import { createSlice } from "@reduxjs/toolkit";

// Початковий стан слайсу, заповнений тестовими даними
const initialState = {
  items: [
    {
      id: "1", // ID для збігу з useParams() в URL: /catalog/1
      name: "Mavericks",
      price: 8000,
      rating: 4.4,
      location: "Kyiv, Ukraine",
      images: [
        "https://ftp.goit.global/campers/1-1.jpg",
        "https://ftp.goit.global/campers/1-2.jpg",
        "https://ftp.goit.global/campers/1-3.jpg",
        "https://ftp.goit.global/campers/1-4.jpg",
      ],
      reviews: [
        {
          reviewer_name: "Alice",
          reviewer_rating: 5,
          comment:
            "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials.",
        },
        {
          reviewer_name: "Bob",
          reviewer_rating: 3,
          comment:
            "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback.",
        },
      ],
      // Характеристики для бейджів з ТЗ
      transmission: "Automatic",
      engine: "Petrol",
      AC: true,
      kitchen: true,
      radio: true,
      bathroom: false,
      TV: false,
      refrigerator: true,
      microwave: false,
      gas: false,
      water: false,
      // Деталі для таблиці кузова з ТЗ
      form: "Panel truck",
      length: "5.4 m",
      width: "2.01 m",
      height: "2.05 m",
      tank: "132 l",
      consumption: "12.4 l / 100km",
    },
  ],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
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

// --- СЕЛЕКТОРИ ДЛЯ ТЕСТУВАННЯ СТОРІНКИ ДЕТАЛЕЙ ---

// Селектор повертає стан завантаження
export const selectIsLoading = (state) => state.campers.isLoading;

// Селектор шукає в масиві items потрібний кемпер за його ID (динамічно з URL через useParams)
// Оскільки в DetailPage ми викликаємо useSelector(selectCamperDetails), а параметри передати туди складно,
// цей тестовий селектор для зручності завжди повертатиме наш перший тестовий кемпер, якщо масив не порожній:
export const selectCamperDetails = (state) => state.campers.items[0] || null;
export const selectCampers = (state) => state.campers.items;

export const { setCampers, setLoading, setError } = campersSlice.actions;
export default campersSlice.reducer;
