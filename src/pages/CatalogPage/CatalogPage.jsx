import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../api/movies-api";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSubmit = (value) => {
    // setSearchParams({ q: value });
    const trimmedValue = value.trim();

    if (trimmedValue === "") {
      searchParams.delete("q"); // Очищаємо URL, якщо інпут порожній
    } else {
      searchParams.set("q", trimmedValue); // Безпечно додаємо або оновлюємо "q"
    } 
    setSearchParams(searchParams); // Записуємо оновлені параметри в URL
  };

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      setMovies([]);

      try {
        const data = await getSearchMovie(searchQuery);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <SearchBox onHandlerSubmit={handlerSubmit} />

      {isLoading && (
        <div className={styles.statusMessage}>
          <Loader />
        </div>
      )}

      {error && (
        <p className={styles.statusMessage}>
          Something is wrong! Reload page, please...
        </p>
      )}

      {!isLoading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}

      {/* Повідомлення для користувача, якщо за запитом нічого не знайдено */}
      {!isLoading && !error && searchQuery && movies.length === 0 && (
        <p className={styles.noResults}>
          No movies found for "{searchQuery}". Try another search!
        </p>
      )}
    </div>
  );
};

export default MoviesPage;
