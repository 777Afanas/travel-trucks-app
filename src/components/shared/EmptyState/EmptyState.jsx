import Button from '../Button/Button';
import css from './EmptyState.module.css';

const EmptyState = ({ onReset }) => {
  return (
    <div className={css.emptyStateContainer}>
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn’t find any campers that match your filters. <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        {/* Кнопка Clear filters викликає централізоване скидання */}
        <Button variant="secondary" onClick={onReset}>
          ✕ Clear filters
        </Button>
        
        {/* Кнопка View all campers робить те саме через той самий проп */}
        <Button variant="primary" onClick={onReset}>
          View all campers
        </Button>
      </div>
    </div>
  );
};

export default EmptyState; 

