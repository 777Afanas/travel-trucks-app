import css from './CamperInfo.module.css';

const CamperInfo = ({ camper }) => {
  // Форматуємо ціну відповідно до ТЗ: додаємо копійки через кому (напр. 8000,00)
  const formattedPrice = Number(camper.price).toFixed(2).replace('.', ',');
  const reviewsCount = camper.reviewsCount ?? camper.reviews?.length ?? 0;

  return (
    <div className={css.infoWrapper}>
      <h1 className={css.title}>{camper.name}</h1>
      
      <div className={css.metaRow}>
        <span className={css.rating}>
          <span className={css.star}>★</span> {camper.rating || 0} ({reviewsCount} Reviews)
        </span>
        <span className={css.location}>
          <svg className={css.metaIcon}>
            <use href="/assets/gemini-svg.svg#icon-location"></use>
          </svg>
          {camper.location}
        </span>
      </div>
      
      {/* Виводимо знак валюти разом із відформатованою ціною */}
      <p className={css.price}>€{formattedPrice}</p>
      
      <p className={css.description}>{camper.description}</p>
    </div>
  );
};

export default CamperInfo;