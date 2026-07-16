
// import styles from './DetailsPage.module.css';
// import CamperGallery from './components/CamperGallery/CamperGallery';
// import CamperInfo from './components/CamperInfo/CamperInfo';
// import VehicleDetails from './components/VehicleDetails/VehicleDetails';
// import ReviewList from './components/ReviewList/ReviewList';
// import BookingForm from './components/BookingForm/BookingForm';

// Резервні фейкові дані для тестування після перезавантаження сторінки
const DEFAULT_MOCK_CAMPER = {
  id: "1",
  name: "Mavericks",
  price: 8000,
  rating: 4.4,
  reviewsCount: 2,
  location: "Kyiv, Ukraine",
  // Переконайтеся, що масив images не пустий, щоб галерея не ламалася
  images: [
    "https://ftp.goit.study/img/campers-ca-posts/1-1.jpg",
    "https://ftp.goit.study/img/campers-ca-posts/1-2.jpg"
  ], 
  description: "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples...",
  reviews: [] // Пустий масив відгуків для тестування
};


// const DetailsPage = ({ camperData }) => {
const DetailsPage = ({ camperData }) => {
    const data = camperData || DEFAULT_MOCK_CAMPER;

  return ( 
    <p>DetailsPage: {data.name}</p>

    // <div className={styles.mainContent}>
    //   {/* Верхній блок: Галерея зліва, Опис справа */}
    //   <section className={styles.topSection}>
    //     <div className={styles.galleryCol}>
    //       <CamperGallery images={camperData.images} />
    //     </div>
    //     <div className={styles.infoCol}>
    //       <CamperInfo camper={camperData} />
    //     </div>
    //   </section>

    //   {/* Середній блок: Технічні характеристики кемпера */}
    //   <section className={styles.middleSection}>
    //     <VehicleDetails camper={camperData} />
    //   </section>

    //   {/* Нижній блок: Відгуки зліва, форма бронювання справа */}
    //   <section className={styles.bottomSection}>
    //     <div className={styles.reviewsCol}>
    //       <ReviewList reviews={camperData.reviews} />
    //     </div>
    //     <div className={styles.bookingCol}>
    //       <BookingForm camperId={camperData.id} />
    //     </div>
    //   </section>
    // </div> 

  );
};

export default DetailsPage;