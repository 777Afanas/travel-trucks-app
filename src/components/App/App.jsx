// 1. Зовнішні бібліотеки (Спершу React, потім інші пакети)
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// 3. Структурні / Лейаут компоненти (Контейнери)
import Section from "../Section/Section";
import Container from "../Container/Container";

// 4. Функціональні компоненти додатку
const HomeLayout = lazy(() => import("../../layouts/HomeLayout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(
  () => import("../../pages/MovieDetailsPage/MovieDetailsPage"),
);
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(
  () => import("../../components/MovieReviews/MovieReviews"),
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage"),
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage />} />
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage />}
            >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />}/>
          </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
