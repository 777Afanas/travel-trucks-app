import { Suspense, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../api/movies-api";
import Loader from "../../components/Loader/Loader";
import styles from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const linkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.isActive);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const MovieDetailsPageLocation = useLocation();  // MovieListLocation
  const backLinkHref = MovieDetailsPageLocation.state?.from ?? "/"; 
  

  const defaultPng =
    "https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png";

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  
  return (
    <div>
      <Link to={ backLinkHref }>Go back</Link>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload...</p>}
      {movie && (
        <div className={styles.div}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultPng
            }
            alt={movie.title || "Default title"}
            width={300}
          />
          <div className={styles.divDetails}>
            <h2 className={styles.details}>
              {movie.title || movie.original_title} (
              {movie.release_date?.slice(0, 4) || "Unknown year"})
            </h2>
            <p className={styles.details}>
              User score: {Math.round(movie.vote_average * 10)}%
            </p>
            <h3 className={styles.details}>Overview</h3>
            <p className={styles.details}>{movie.overview}</p>
            <h3 className={styles.details}>Genres</h3>
            <p className={styles.details}>
              {movie.genres?.map((genre) => genre.name).join(", ") ||
                "No genres available"}
            </p>
          </div>
        </div>
      )}
      <hr style={{ width: "100%" }} />
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLinkHref }} className={linkClass}>
            Casts
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: backLinkHref }} className={linkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUB COMPONENT...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
