
import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Campers of your dreams</h1>
        <p className={styles.heroSubtitle}>
          You can find everything you want in our catalog
        </p>
        
        {/* Чистий перехід без зайвого збереження state */}
        <Link to="/catalog" style={{ textDecoration: 'none' }}>
          <Button>View Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;