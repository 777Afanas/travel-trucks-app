import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../redux/operations'; // Ваш асинхронний запит з Axios
import { selectCamperDetails, selectIsLoading } from '../redux/selectors';

import CamperInfo from '../components/CamperInfo/CamperInfo';
import CamperGallery from '../components/CamperGallery/CamperGallery';
import VehicleDetails from '../components/VehicleDetails/VehicleDetails';
import ReviewList from '../components/ReviewList/ReviewList';
import BookForm from '../components/BookForm/BookForm';
import Loader from '../components/Loader/Loader'; 

import css from './DetailPage.module.css';

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
    <div className={css.container}>
      {/* Уся сторінка — це єдиний двоколонковий Flex/Grid контейнер */}
      <div className={css.pageLayout}>
        
        {/* ЛІВА КОЛОНКА */}
        <div className={css.leftColumn}>
          <CamperGallery images={camper.images} />
          <ReviewList reviews={camper.reviews} />
        </div>

        {/* ПРАВА КОЛОНКА */}
        <div className={css.rightColumn}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
          <BookForm camperId={id} />
        </div>

      </div>
    </div>
  );
};
export default DetailPage;