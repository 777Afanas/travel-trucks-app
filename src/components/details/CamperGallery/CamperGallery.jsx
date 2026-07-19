import { useState } from 'react';
import css from './CamperGallery.module.css';

const CamperGallery = ({ images }) => { 
//  Безпечна ініціалізація стану після перевірки масиву
  const [activeImage, setActiveImage] = useState(
    images[0]?.original || images[0]?.thumb || ''
  );

  // Захист: якщо images немає або це не масив — одразу виходим, уникаючи крашу
  if (!images || !Array.isArray(images) || images.length === 0) return null;
  
  return (
    <div className={css.galleryWrapper}>
      {/* Головне велике фото */}
      <div className={css.mainImageContainer}>
        <img src={activeImage} alt="Camper main view" className={css.mainImg} />
      </div>

      {/* Список прев'ю (мініатюр) */}
      <div className={css.thumbnailsList}>
        {images.map((img, index) => {
          const imgSrc = img.original || img.thumb;
          return (
            <img
              key={index}
              src={img.thumb}
              alt={`Thumbnail ${index + 1}`}
              className={`${css.thumbnailImg} ${activeImage === imgSrc ? css.active : ''}`}
              onClick={() => setActiveImage(imgSrc)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CamperGallery;


// import { useState } from 'react';
// import css from './CamperGallery.module.css';

// const CamperGallery = ({ images }) => {
//   const [activeImage, setActiveImage] = useState(images?.[0] || '');

//   if (!images || images.length === 0) return null;

//   return (
//     <div className={css.galleryWrapper}>
//       <div className={css.mainImageContainer}>
//         <img src={activeImage} alt="Camper main view" className={css.mainImg} />
//       </div>
//       <div className={css.thumbnailsList}>
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Thumbnail ${index + 1}`}
//             className={`${css.thumbnailImg} ${activeImage === img ? css.active : ''}`}
//             onClick={() => setActiveImage(img)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CamperGallery;