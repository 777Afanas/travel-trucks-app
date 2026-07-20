import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; // Додаємо хук для URL
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
  const [, setSearchParams] = useSearchParams(); // Керування URL параметрами

  const campers = useSelector(selectFilteredCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers({ page }));
  }, [dispatch, page]);

  const handleFilterSubmit = (newFilters) => {
    dispatch(changeFilters(newFilters));
  };

  const handleLoadMore = () => {
    dispatch(changePage());
  };

  // Метод централізованого глобального скидання: чистить URL, форму через Redux та пагінацію
  const handleGlobalReset = () => {
    setSearchParams({}); // 1. Видаляє Query-параметри, повертаючи чистий /catalog

    dispatch(
      changeFilters({
        // 2. Обнуляє стейт фільтрів (Formik підхопить це завдяки enableReinitialize)
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

    dispatch(resetCampers()); // 3. Повертає page: 1 та чистить items для свіжого фетчу

    //  примусово викликаємо фетч першої сторінки для заповнення стейту
    dispatch(fetchCampers({ page: 1 }));
  };

  return (
    <main className={`container ${css.catalogContainer}`}>
      <SidebarFilter
        onFilterSubmit={handleFilterSubmit}
        onReset={handleGlobalReset}
      />

      <div className={css.catalogContent}>
        {/* СТАН 1: Завантаження */}
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

        {/* СТАН 1: Завантаження
        {isLoading && campers.length === 0 && (
          <div className={css.loaderBackdrop}>
            <div className={css.loaderCard}>
              <div className={css.spinner}></div>
              <h2>Loading tracks...</h2>
            </div>
          </div>
        )} */}

        {/* СТАН 2: Порожній результат — Передаємо наш handleGlobalReset */}
        {!isLoading && !error && campers.length === 0 && (
          <EmptyState onReset={handleGlobalReset} />
        )}

        {/* СТАН 3: Рендер списку */}
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
