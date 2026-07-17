import { useState } from 'react';
import css from './CamperGallery.module.css';

const CamperGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0] || '');

  if (!images || images.length === 0) return null;

  return (
    <div className={css.galleryWrapper}>
      <div className={css.mainImageContainer}>
        <img src={activeImage} alt="Camper main view" className={css.mainImg} />
      </div>
      <div className={css.thumbnailsList}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`${css.thumbnailImg} ${activeImage === img ? css.active : ''}`}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default CamperGallery;