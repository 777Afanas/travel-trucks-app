import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { 
  selectCampers, 
  selectIsLoading, 
  selectError, 
  selectPage, 
  changePage, 
  resetCampers 
} from '../../redux/campersSlice';
import { selectActiveFilters, changeFilters } from '../../redux/filtersSlice';

import SidebarFilter from '../../components/catalog/SidebarFilter/SidebarFilter';
import CamperList from '../../components/catalog/CamperList/CamperList';
import EmptyState from '../../components/shared/EmptyState/EmptyState';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  // Читання стану з обох слайсів
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const filters = useSelector(selectActiveFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  
  const filtersString = JSON.stringify(filters);

useEffect(() => {
  // Розпаковуємо рядок назад в об'єкт
  const activeFilters = JSON.parse(filtersString);   
  dispatch(fetchCampers({ filters: activeFilters, page }));
}, [dispatch, page, filtersString]); // Тепер тут повна гармонія
  

  // Сабміт форми фільтрів
  const handleFilterSubmit = (newFilters) => {
    dispatch(resetCampers());          // 1. Скидаємо масив кемперів та повертаємо page на 1
    dispatch(changeFilters(newFilters)); // 2. Оновлюємо фільтри в сторі (це тригерить useEffect)
  };

  // Клікі на кнопку Load More
  const handleLoadMore = () => {
    dispatch(changePage()); // Інкрементує сторінку (це тригерить useEffect)
  };

  return (
    <main className={css.catalogContainer}>
      <SidebarFilter onFilterSubmit={handleFilterSubmit} />

      <div className={css.catalogContent}>
        
        {/* СТАН 1: Завантаження першої сторінки або довантаження */}
        {isLoading && campers.length === 0 && (
          <div className={css.loaderBackdrop}>
            <div className={css.loaderCard}>
              <div className={css.spinner}></div>
              <h2>Loading tracks...</h2>
            </div>
          </div>
        )}

        {/* СТАН 2: Порожній результат пошуку */}
        {!isLoading && !error && campers.length === 0 && (
          <EmptyState />
        )}

        {/* СТАН 3: Рендер списку кемперів */}
        {!error && campers.length > 0 && (
          <>
            <CamperList campers={campers} />
            
            {/* Показуємо кнопку Load More лише якщо не йде завантаження */}
            {!isLoading && (
              <button type="button" className={css.loadMoreBtn} onClick={handleLoadMore}>
                Load more
              </button>
            )}
          </>
        )}
        
      </div>
    </main>
  );
};

export default CatalogPage;