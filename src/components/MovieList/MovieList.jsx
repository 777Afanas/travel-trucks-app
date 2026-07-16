import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const MovieListLocation = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={styles.item}>
          <h3 className={styles.h3}>
            <Link
              className={styles.link}
              to={`/movies/${id}`}
              state={{ from: MovieListLocation }}
            >
              {title}
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;


// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };