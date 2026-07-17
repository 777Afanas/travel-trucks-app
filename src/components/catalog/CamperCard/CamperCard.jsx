import { Link, useLocation } from 'react-router-dom';
import Button from '../../shared/Button/Button';

const CamperCard = ({ camper }) => {
  const location = useLocation();

  return (
    <div className="camper-card">
      <img src={camper.image} alt={camper.name} className="camper-img" />

      <div className="camper-info">
        <div className="card-header">
          <h3>{camper.name}</h3>
          <span className="price">€{camper.price}</span>
        </div>

        <div className="card-meta">
          <span>★ {camper.rating} ({camper.reviewsCount} Reviews)</span>
          <span>{camper.location}</span>
        </div>

        <p className="description">{camper.description}</p>

        <div className="features-tags">
          <span className="tag">{camper.engine}</span>
          <span className="tag">{camper.transmission}</span>
          <span className="tag">{camper.form}</span>
        </div>

        {/* Декларативний лінк, який огортає кнопку, відкриває нову вкладку та зберігає історію */}
        <Link 
          to={`/catalog/${camper.id}`} 
          state={location} // Передаємо весь об'єкт location для повернення назад із фільтрами
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'inline-block' }} // Прибираємо дефолтне підкреслення лінків
        >
          <Button variant="primary">
            Show more
          </Button>
        </Link>
      </div>
    </div>
  );
};




// const CamperCard = ({ camper }) => {
//   const navigate = useNavigate();
//   const location = useLocation(); // Запоминаем, откуда переходим (страницу каталога)

//   const handleShowMore = () => {
//     // Переходим на страницу деталей кемпера и передаем текущую локацию в state
//     navigate(`/catalog/${camper.id}`, { state: { from: location } });
//   };

//   return (
//     <div className="camper-card">
//       <img src={camper.image} alt={camper.name} className="camper-img" />

//       <div className="camper-info">
//         <div className="card-header">
//           <h3>{camper.name}</h3>
//           <span className="price">€{camper.price}</span>
//         </div>

//         <div className="card-meta">
//           <span>★ {camper.rating} ({camper.reviewsCount} Reviews)</span>
//           <span>{camper.location}</span>
//         </div>

//         <p className="description">{camper.description}</p>

//         <div className="features-tags">
//           <span className="tag">{camper.engine}</span>
//           <span className="tag">{camper.transmission}</span>
//           <span className="tag">{camper.form}</span>
//         </div>

//         {/* Навешиваем клик на кнопку для программного перехода */}
//         <Button variant="primary" onClick={handleShowMore}>
//           Show more
//         </Button>
//       </div>
//     </div>
//   );
// };



export default CamperCard;