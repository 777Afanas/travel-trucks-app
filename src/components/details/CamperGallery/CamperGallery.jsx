import { useState } from 'react';
import css from './CamperGallery.module.css';

const CamperGallery = ({ images }) => { 
  
  const [activeImage, setActiveImage] = useState(
    images?.[0]?.original || images?.[0]?.thumb || ''
  );

  // Захист від крашу, якщо масив порожній
  if (!images || !Array.isArray(images) || images.length === 0) return null;
  
  return (
    <div className={css.galleryWrapper}>
      {/* Головне велике фото */}
      <div className={css.mainImageContainer}>
        <img src={activeImage} alt="Camper main view" className={css.mainImg} />
      </div>

      {/* Список мініатюр (автоматично розрахований на 3 колонки) */}
      <div className={css.thumbnailsList}>
        {images.map((img, index) => {
          const imgSrc = img.original || img.thumb;
          return (
            <img
              key={index}
              src={img.thumb || img.original}
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

