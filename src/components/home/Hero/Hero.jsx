import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Текстовий блок: рівно 571 x 176 */}
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Campers of your dreams</h1>
        <p className={styles.heroSubtitle}>
          You can find everything you want in our catalog
        </p>
      </div>

      {/* Кнопка: винесена окремо, рендериться як Link, ширина 173px, top: 500px */}
      <Button 
        as={Link} 
        to="/catalog" 
        className={styles.heroBtn}
      >
        View Now
      </Button>
    </section>
  );
};

export default Hero;