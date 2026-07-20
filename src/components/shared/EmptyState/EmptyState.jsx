import Button from '../Button/Button';
import css from './EmptyState.module.css';
import errorIllustration from './error-illustration.svg'; 

const EmptyState = ({ onReset }) => {
  return (
    <div className={css.emptyStateContainer}>
      <img 
        src={errorIllustration} 
        alt="No campers found" 
        className={css.illustration}
      />

      <div className={css.textBlock}>
        <h2 className={css.title}>No campers found</h2>
        <p className={css.text}>
          We couldn’t find any campers that match your filters. <br />
          Try adjusting your search or clearing some filters.
        </p>
      </div>

      <div className={css.actions}>
        <Button variant="secondary" onClick={onReset} className={css.btnSecondary}>
          ✕ Clear filters
        </Button>
        <Button variant="primary" onClick={onReset} className={css.btnPrimary}>
          View all campers
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;