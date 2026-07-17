import { useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';
import css from './EmptyState.module.css';
// import camperIllustration from '../../assets/camper-placeholder.svg'; // картинка з макету

const EmptyState = () => {
  const [, setSearchParams] = useSearchParams();

  const handleReset = () => {
    setSearchParams({}); // Очищає URL-параметри, повертаючи на чистий /catalog
  };

  return (
    <div className={css.emptyStateContainer}>
      {/* <img src={camperIllustration} alt="No campers found" className={css.image} /> */}
      
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn’t find any campers that match your filters. <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        {/* Кнопка з хрестиком (модифікатор secondary) */}
        <Button variant="secondary" onClick={handleReset}>
          ✕ Clear filters
        </Button>
        
        {/* Кнопка залита (модифікатор primary) */}
        <Button variant="primary" onClick={handleReset}>
          View all campers
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;


