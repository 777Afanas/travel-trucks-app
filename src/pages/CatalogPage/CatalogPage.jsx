import { useState } from 'react';
import SidebarFilter from '../../components/catalog/SidebarFilter/SidebarFilter';
import CamperList from '../../components/catalog/CamperList/CamperList';
import EmptyState from '../../components/shared/EmptyState/EmptyState';
import css from './CatalogPage.module.css';

// Головний масив для фільтрації на стороні "псевдо-бекенду"
const ALL_MOCK_CAMPERS = [
  { id: "1", name: "Mavericks", price: 8000, rating: 4.4, reviewsCount: 2, location: "Kyiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/1-1.jpg", description: "Embrace simplicity and freedom...", engine: "Petrol", transmission: "Automatic", form: "Alcove" },
  { id: "2", name: "Kuga Camper", price: 9000, rating: 4.2, reviewsCount: 10, location: "Lviv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/2-1.jpg", description: "Enjoy your road trip with this perfect camper!", engine: "Petrol", transmission: "Automatic", form: "Alcove" },
  { id: "3", name: "Roadie", price: 7500, rating: 4.8, reviewsCount: 5, location: "Odesa, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/3-1.jpg", description: "Compact and easy to drive...", engine: "Diesel", transmission: "Manual", form: "Van" },
  { id: "4", name: "Crusader", price: 12000, rating: 4.9, reviewsCount: 14, location: "Kyiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/4-1.jpg", description: "Luxury on wheels for the whole family...", engine: "Diesel", transmission: "Automatic", form: "Fully Integrated" },
  { id: "5", name: "Seeker", price: 6800, rating: 4.0, reviewsCount: 3, location: "Kharkiv, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/5-1.jpg", description: "Budget friendly option for weekend getaways...", engine: "Petrol", transmission: "Manual", form: "PanelTruck" },
  { id: "6", name: "Trailblazer", price: 10500, rating: 4.6, reviewsCount: 8, location: "Dnipro, Ukraine", image: "https://ftp.goit.study/img/campers-ca-posts/6-1.jpg", description: "Built for off-road adventures...", engine: "Diesel", transmission: "Automatic", form: "Alcove" }
];

const CatalogPage = () => {
  // Початковий стейт порожній — сигнал для CamperList увімкнути дефолтні моки
  const [campers, setCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Логіка фільтрації (імітація запиту до сервера)
  const handleFilterSubmit = (filters) => {
    setIsLoading(true);

    setTimeout(() => {
      const filtered = ALL_MOCK_CAMPERS.filter((camper) => {
        // 1. Фільтр по локації
        if (filters.location && !camper.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        // 2. Фільтр по типу двигуна
        if (filters.engine && camper.engine !== filters.engine) {
          return false;
        }
        // 3. Фільтр по трансмісії
        if (filters.transmission && camper.transmission !== filters.transmission) {
          return false;
        }
        // 4. Фільтр по формі кузова (з урахуванням Panel Van -> PanelTruck)
        if (filters.camperForm) {
          const formData = camper.form.toLowerCase();
          const formFilter = filters.camperForm.toLowerCase();
          if (!formData.includes(formFilter) && !(formFilter === 'panel van' && formData === 'paneltruck')) {
            return false;
          }
        }
        return true;
      });

      // Якщо нічого не знайдено — записуємо null, інакше — знайдені елементи
      setCampers(filtered.length > 0 ? filtered : null);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className={css.catalogContainer}>
      
      {/* Бокова панель з фільтрами */}
      <SidebarFilter onFilterSubmit={handleFilterSubmit} />

      {/* Основний контент сторінки */}
      <div className={css.catalogContent}>
        
        {/* СТАН 1: Завантаження (Бекдроп поверх контенту) */}
        {isLoading && (
          <div className={css.loaderBackdrop}>
            <div className={css.loaderCard}>
              <div className={css.spinner}></div>
              <h2>Loading tracks...</h2>
              <p>Please wait while we fetch the best travel trucks for you</p>
            </div>
          </div>
        )}

        {/* СТАН 2: Порожній результат фільтрації */}
        {!isLoading && campers === null && (
          <EmptyState />
        )}

        {/* СТАН 3: Успішно завантажені або дефолтні дані */}
        {!isLoading && campers !== null && (
          <CamperList campers={campers.length > 0 ? campers : null} />
        )}
        
      </div>
    </main>
  );
};

export default CatalogPage;