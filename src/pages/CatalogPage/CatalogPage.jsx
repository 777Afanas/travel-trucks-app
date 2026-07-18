import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectCampers, selectIsLoading, selectError } from '../../redux/campersSliсe';

import SidebarFilter from '../../components/catalog/SidebarFilter/SidebarFilter';
import CamperList from '../../components/catalog/CamperList/CamperList';
import EmptyState from '../../components/shared/EmptyState/EmptyState';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  // 1. Використовуємо готові селектори з твого campersSlice
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // 2. Завантажуємо дані при монтуванні сторінки
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleFilterSubmit = (filters) => {
    console.log('Filters submitted:', filters);
  };

  return (
    <main className={css.catalogContainer}>
      <SidebarFilter onFilterSubmit={handleFilterSubmit} />

      <div className={css.catalogContent}>
        
        {/* ТИМЧАСОВА ПЕРЕВІРКА REDUX СТАНУ */}
        <div style={{ background: '#f4f4f4', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          <h3>Redux Status:</h3>
          <p>Campers in store: {campers.length}</p>
          <p>Loading: {isLoading ? '✅ Yes' : '❌ No'}</p>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>

        {/* СТАН 1: Завантаження */}
        {isLoading && (
          <div className={css.loaderBackdrop}>
            <div className={css.loaderCard}>
              <div className={css.spinner}></div>
              <h2>Loading tracks...</h2>
              <p>Please wait while we fetch the best travel trucks for you</p>
            </div>
          </div>
        )}

        {/* СТАН 2: Помилка або порожній список */}
        {!isLoading && !error && campers.length === 0 && (
          <EmptyState />
        )}

        {/* СТАН 3: Рендер списку кемперів */}
        {!isLoading && !error && campers.length > 0 && (
          <CamperList campers={campers} />
        )}
        
      </div>
    </main>
  );
};

export default CatalogPage;