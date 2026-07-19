import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';

const CamperCard = ({ camper }) => {
  
  // витягуємо зображення: шукаємо в gallery об'єкт/рядок, або падаємо на camper.image
  const camperImage = camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original || camper.gallery?.[0] || camper.image;

  // рахуємо кількість відгуків (якщо сервер повертає масив reviews замість reviewsCount)
  const reviewsCount = camper.reviewsCount ?? camper.reviews?.length ?? 0;

  return (
    <div className="camper-card">
      <img src={camperImage} alt={camper.name} className="camper-img" />

      <div className="camper-info">
        <div className="card-header">
          <h3>{camper.name}</h3>
          <span className="price">
            €{Number(camper.price).toFixed(2).replace(".", ",")}
          </span>
        </div>

        <div className="card-meta">
          <span>
            ★ {camper.rating || 0} ({reviewsCount} Reviews)
          </span>
          <span>{camper.location}</span>
        </div>

        <p className="description">{camper.description}</p>

        <div className="features-tags">
          <span className="tag">{camper.engine}</span>
          <span className="tag">{camper.transmission}</span>
          <span className="tag">{camper.form}</span>
        </div>

        {/* Декларативний лінк для відкриття детальної сторінки в новій вкладці */}
        <Link
          to={`/catalog/${camper.id}`}           
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <Button variant="primary">Show more</Button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;