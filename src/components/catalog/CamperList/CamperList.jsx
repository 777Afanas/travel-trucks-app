import CamperCard from '../CamperCard/CamperCard';
import Button from '../../shared/Button/Button';

// Фейкові дані для тестування (якщо бекенд мовчить)
const MOCK_CAMPERS = [
  {
    id: "1",
    name: "Mavericks",
    price: 8000,
    rating: 4.4,
    reviewsCount: 2,
    location: "Kyiv, Ukraine",
    image: "https://ftp.goit.study/img/campers-ca-posts/1-1.jpg", // Будь-яке тестове фото
    description: "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples...",
    engine: "Petrol",
    transmission: "Automatic",
    form: "Alcove"
  },
  {
    id: "2",
    name: "Kuga Camper",
    price: 8000,
    rating: 4.2,
    reviewsCount: 10,
    location: "Kyiv, Ukraine",
    image: "https://ftp.goit.study/img/campers-ca-posts/2-1.jpg",
    description: "The pictures shown here are example vehicles of the respective group. Enjoy your road trip with this perfect camper!",
    engine: "Petrol",
    transmission: "Automatic",
    form: "Alcove"
  }
];

const CamperList = ({ campers }) => {

    // Якщо campers пустий, undefined або ще завантажується — показуємо фейкові картки
  const campersToRender = campers && campers.length > 0 ? campers : MOCK_CAMPERS;
  return (
    <div className="catalog-list-wrapper">
      <div className="camper-list">
              {/* {campers?.map((camper) => ( */}
            {campersToRender?.map((camper) => (
            
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {/* Кнопка "Load more" є логічною частиною списку */}
      <div className="pagination-container">
        <Button variant="secondary">Load more</Button>
      </div>
    </div>
  );
};

export default CamperList;