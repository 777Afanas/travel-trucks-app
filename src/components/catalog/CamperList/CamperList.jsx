import { useState, useEffect } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import Button from '../../shared/Button/Button';

const MOCK_CAMPERS = [
  { id: "1", name: "Mavericks", price: 8000, rating: 4.4, reviewsCount: 2, location: "Kyiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/1-1.jpg", form: "Alcove" },
  { id: "2", name: "Kuga Camper", price: 9000, rating: 4.2, reviewsCount: 10, location: "Lviv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/2-1.jpg", form: "Alcove" },
  { id: "3", name: "Roadie", price: 7500, rating: 4.8, reviewsCount: 5, location: "Odesa, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/3-1.jpg", form: "Van" },
  { id: "4", name: "Crusader", price: 12000, rating: 4.9, reviewsCount: 14, location: "Kyiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/4-1.jpg", form: "Fully Integrated" },
  { id: "5", name: "Seeker", price: 6800, rating: 4.0, reviewsCount: 3, location: "Kharkiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/5-1.jpg", form: "PanelTruck" },
  { id: "6", name: "Trailblazer", price: 10500, rating: 4.6, reviewsCount: 8, location: "Dnipro, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/6-1.jpg", form: "Alcove" }
];

const CamperList = ({ campers }) => {
  const ITEMS_PER_PAGE = 2;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // Скидаємо лічильник до 2 щоразу, коли змінюються результати фільтрації в CatalogPage
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [campers]);

  // Джерело даних: або відфільтровані з пропсів, або дефолтні моки
  const sourceData = campers ? campers : MOCK_CAMPERS;
  
  // Шматок масиву для рендеру (завжди ріжеться актуальне джерело даних)
  const campersToRender = sourceData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + ITEMS_PER_PAGE);
      setIsButtonLoading(false);
    }, 500);
  };

  const hasMore = visibleCount < sourceData.length;

  return (
    <div className="catalog-list-wrapper">
      <div className="camper-list">
        {campersToRender.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {isButtonLoading && <div className="loader">Loading more...</div>}

      {hasMore && !isButtonLoading && (
        <div className="pagination-container">
          <Button variant="secondary" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};


// const CamperList = ({ campers = [] }) => {
// const CamperList = ({ campers }) => {
  
  
//   return (
//     <div className="catalog-list-wrapper">
//       <div className="camper-list">
//               {campers?.map((camper) => (          
            
//           <CamperCard key={camper.id} camper={camper} />
//         ))}
//       </div>
     
//       <div className="pagination-container">
//         <Button variant="secondary">Load more</Button>
//       </div>
//     </div>
//   );
// };

export default CamperList;