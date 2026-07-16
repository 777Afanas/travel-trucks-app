import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css"; 

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oops! Page not found!</h2>
      <p className={styles.text}>
        <Link to="/" className={styles.link}>Back to home page!</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;