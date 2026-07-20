import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campersOps';
import { selectCamperDetails, selectIsLoading } from '../../redux/campersSlice';

import CamperInfo from '../../components/details/CamperInfo/CamperInfo';
import CamperGallery from '../../components/details/CamperGallery/CamperGallery';
import VehicleDetails from '../../components/details/VehicleDetails/VehicleDetails';
import ReviewList from '../../components/details/ReviewList/ReviewList';
import BookForm from '../../components/details/BookForm/BookForm';
import Loader from '../../components/shared/Loader/Loader'; 

import css from './DetailsPage.module.css';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!camper) return null;

  return (
    <div className={`container ${css.container}`}>
      {/* ВЕРХНІЙ ЯРУС: Галерея + Інфо та Деталі машини */}
      <div className={css.topSection}>
        <div className={css.galleryColumn}>
          <CamperGallery images={camper.gallery} />
        </div>
        <div className={css.infoColumn}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </div>
      </div>
      
      {/* НИЖНІЙ ЯРУС: Відгуки + Форма бронювання */}
      <div className={css.bottomSectionContainer}>
       <h2 className={css.sectionTitle}>Reviews</h2>
       
        <div className={css.bottomSection}>
        <div className={css.reviewsColumn}>
          <ReviewList reviews={camper.reviews} />
        </div>
        <div className={css.formColumn}>
          <BookForm camperId={id} />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default DetailPage;



// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCamperById } from '../../redux/campersOps'; // Ваш асинхронний запит з Axios
// import { selectCamperDetails, selectIsLoading } from '../../redux/campersSlice';

// import CamperInfo from '../../components/details/CamperInfo/CamperInfo';
// import CamperGallery from '../../components/details/CamperGallery/CamperGallery';
// import VehicleDetails from '../../components/details/VehicleDetails/VehicleDetails';
// import ReviewList from '../../components/details/ReviewList/ReviewList';
// import BookForm from '../../components/details/BookForm/BookForm';
// import Loader from '../../components/shared/Loader/Loader'; 

// import css from './DetailsPage.module.css';

// const DetailPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const camper = useSelector(selectCamperDetails);
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchCamperById(id));
//   }, [dispatch, id]);

//   if (isLoading) return <Loader />;
//   if (!camper) return null;

//   return (
//     <div className={css.container}>
//       {/* Уся сторінка — це єдиний двоколонковий Flex/Grid контейнер */}
//       <div className={css.pageLayout}>
        
//         {/* ЛІВА КОЛОНКА */}
//         <div className={css.leftColumn}>
//           <CamperGallery images={camper.gallery} />
//           <ReviewList reviews={camper.reviews} />
//         </div>

//         {/* ПРАВА КОЛОНКА */}
//         <div className={css.rightColumn}>
//           <CamperInfo camper={camper} />
//           <VehicleDetails camper={camper} />
//           <BookForm camperId={id} />
//         </div>

//       </div>
//     </div>
//   );
// };
// export default DetailPage;