import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getMovieCredits } from "../../api/movies-api";
import styles from "./MovieCast.module.css";


const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const defaultPng =
    "https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_1280.png";
  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);


  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload page, please...</p>}
      {cast.length > 0 && (
        <ul className={styles.list}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={styles.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultPng
                }
                alt={name}
                width={120}
              />
              <div>
                <p className={styles.p}>{name || "No information available"}</p>
                <p className={styles.char}>{character || "No information available"}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !error && !cast.length && <p>This movie has no casts</p>}       
    </>
  );
}

export default MovieCast