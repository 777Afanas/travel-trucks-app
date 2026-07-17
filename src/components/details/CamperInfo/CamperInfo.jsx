import css from './CamperInfo.module.css';

const CamperInfo = ({ camper }) => {
  const formattedPrice = Number(camper.price).toFixed(2).replace('.', ',');

  return (
    <div className={css.infoWrapper}>
      <h1 className={css.title}>{camper.name}</h1>
      <div className={css.metaRow}>
        <span className={css.rating}>★ {camper.rating} ({camper.reviews?.length || 0} Reviews)</span>
        <span className={css.location}>📍 {camper.location}</span>
      </div>
      <p className={css.price}>€{formattedPrice}</p>
    </div>
  );
};

export default CamperInfo;