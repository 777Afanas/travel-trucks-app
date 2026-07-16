import axios from "axios";
import { FaN } from "react-icons/fa6";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA3NDRhMWEzYzcyNjM1NTM0NDgyMDNjYzQyZmFjZSIsInN1YiI6IjY1ZWRkNDMzNDE0NjVjMDE2M2ExNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n1WnUnLLQlfFAU2W66-QgaUwUfazyzUkfnUl82Zcww";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  console.log(data.results);
  return data.results;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
  );
  console.log(data.results);
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  console.log(data);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  console.log(data);
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  console.log(data);
  return data.results;
};
