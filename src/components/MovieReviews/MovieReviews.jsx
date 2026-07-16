import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getMovieReviews } from "../../api/movies-api";
import styles from "./MovieReviews.module.css"; 


const MovieReviews = () => { 
const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);


  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {error && <p className={styles.error}>HTTP error! Reload page, please...</p>}
      
      {reviews.length > 0 && (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.item}>
              <h3 className={styles.author}>Author: {author}</h3>
              <p className={styles.content}>{content}</p>
            </li>
          ))}
        </ul>
      )}       
      {/* напис з'явиться ТІЛЬКИ після завершення завантаження */}
      {!isLoading && !error && !reviews.length && (
        <p className={styles.noReviews}>There are no reviews for this film yet</p>
      )}
    </div>
  );
}

export default MovieReviews