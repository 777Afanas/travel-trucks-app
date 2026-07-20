import css from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={css.list}>
      {reviews.map((review, index) => {
        const initial = review.reviewer_name
          ? review.reviewer_name[0].toUpperCase()
          : "U";
          
        return (
          <div key={index} className={css.cardContainer}>
            <div className={css.userHeader}>
              <div className={css.avatar}>{initial}</div>
              <div className={css.metaInfo}>
                <h4 className={css.username}>{review.reviewer_name}</h4>
                <div className={css.starsRow}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const isActive = i < review.reviewer_rating;
                    return (
                      <span 
                        key={i} 
                        className={`${css.star} ${isActive ? css.starActive : css.starInactive}`}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className={css.commentText}>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;

