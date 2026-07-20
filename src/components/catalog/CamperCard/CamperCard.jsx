import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const camperImage =
    camper.gallery?.[0]?.thumb ||
    camper.gallery?.[0]?.original ||
    camper.gallery?.[0] ||
    camper.image;

  // Використовуємо твій підрахунок, або страхуємося через camper.reviews?.length
  const reviewsCount = camper.reviewsCount ?? camper.reviews?.length ?? 0;

  // Безпечне приведення першої літери до верхнього регістру
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={css.camperCard}>
      <div className={css.imageWrapper}>
        <img src={camperImage} alt={camper.name} className={css.camperImg} />
      </div>

      <div className={css.camperInfo}>
        <div className={css.cardHeader}>
          <h3 className={css.title}>{camper.name}</h3>
          <span className={css.price}>
            €{Number(camper.price).toFixed(2).replace(".", ",")}
          </span>
        </div>

        {/* Рядок з рейтингом та локацією (з доданою іконкою карти) */}
        <div className={css.cardMeta}>
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

        {/* Опис кемпера */}
        <p className={css.description}>{camper.description}</p>

        {/* Блок із бейджами характеристик та іконками зі спрайту */}
        <div className={css.featuresTags}>
          {/* Двигун */}
          <span className={css.tag}>
            <svg className={css.tagIcon}>
              <use href="/assets/gemini-svg.svg#icon-petrol"></use>
            </svg>
            {capitalize(camper.engine)}
          </span>

          {/* Коробка передач */}
          <span className={css.tag}>
            <svg className={css.tagIcon}>
              <use href="/assets/gemini-svg.svg#icon-transmission"></use>
            </svg>
            {capitalize(camper.transmission)}
          </span>

          {/* Тип кузова */}
          <span className={css.tag}>
            <svg className={css.tagIcon}>
              <use href="/assets/gemini-svg.svg#icon-alcove"></use>
            </svg>
            {capitalize(camper.form)}
          </span>
        </div>

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.showMoreLink}
        >
          <Button variant="primary">Show more</Button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;

