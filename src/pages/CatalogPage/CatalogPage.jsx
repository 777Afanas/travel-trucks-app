import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchCampers } from "../../redux/campersOps";
import {
  selectFilteredCampers,
  selectIsLoading,
  selectError,
  selectPage,
  changePage,
  resetCampers,
} from "../../redux/campersSlice";
import { changeFilters } from "../../redux/filtersSlice";

import SidebarFilter from "../../components/catalog/SidebarFilter/SidebarFilter";
import CamperList from "../../components/catalog/CamperList/CamperList";
import EmptyState from "../../components/shared/EmptyState/EmptyState";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  // Отримуємо дані з глобального стану Redux
  const campers = useSelector(selectFilteredCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Запит на сервер при зміні сторінки
  useEffect(() => {
    dispatch(fetchCampers({ page }));
  }, [dispatch, page]);

  // Обробник сабміту фільтрів
  const handleFilterSubmit = (newFilters) => {
    dispatch(changeFilters(newFilters));
  };

  // Обробник пагінації (Load more)
  const handleLoadMore = () => {
    dispatch(changePage());
  };

  // Централізоване скидання: очищує URL, фільтри в Redux та скидає сторінку на 1
  const handleGlobalReset = () => {
    setSearchParams({}); // 1. Видаляє Query-параметри з URL

    dispatch(
      changeFilters({
        // 2. Обнуляє стейт фільтрів для Formik
        location: "",
        form: "",
        engine: "",
        transmission: "",
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      }),
    );

    dispatch(resetCampers()); // 3. Повертає page: 1 та чистить масив ітемів

    // 4. Примусово фетчимо першу сторінку для оновлення списку
    dispatch(fetchCampers({ page: 1 }));
  };

  return (
    <main className={css.catalogContainer}>
      {/* Ліва зона: Фільтр */}
      <SidebarFilter
        onFilterSubmit={handleFilterSubmit}
        onReset={handleGlobalReset}
      />

      {/* Права зона: Контент */}
      <div className={css.catalogContent}>
        {/* СТАН 1: Перше завантаження */}
        {isLoading && campers.length === 0 && (
          <div className={css.loaderBackdrop}>
            <div className={css.loaderCard}>
              <div className={css.spinner}></div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 8px 0",
                  color: "#101828",
                }}
              >
                Loading tracks...
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#475467",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                Please wait while we fetch the best
                <br />
                travel trucks for you
              </p>
            </div>
          </div>
        )}

        {/* СТАН 2: Порожній результат фільтрації */}
        {!isLoading && !error && campers.length === 0 && (
          <EmptyState onReset={handleGlobalReset} />
        )}

        {/* СТАН 3: Рендер списку кемперів */}
        {!error && campers.length > 0 && (
          <>
            <CamperList campers={campers} />
            {!isLoading && (
              <button
                type="button"
                className={css.loadMoreBtn}
                onClick={handleLoadMore}
              >
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


