import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../api/movies-api";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
    
      {isLoading && (
        <div className={styles.statusMessage}>
          <Loader />
        </div>
      )}
    
      {error && (
        <p className={styles.errorMessage}>
          HTTP error! Reload page, please...
        </p>
      )}
    
      {!isLoading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </main>
  );
}

export default HomePage;
