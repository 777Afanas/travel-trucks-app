import css from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={css.reviewsWrapper}>
      <h3 className={css.title}>Reviews</h3>
      <div className={css.list}>
        {reviews.map((review, index) => {
          const initial = review.reviewer_name
            ? review.reviewer_name[0].toUpperCase()
            : "U";
          return (
            <div key={index} className={css.cardContainer}>
              <div className={css.userHeader}>
                <div className={css.avatar}>{initial}</div>
                <div>
                  <h4 className={css.username}>{review.reviewer_name}</h4>
                  <div className={css.starsRow}>
                    {"★".repeat(review.reviewer_rating)}
                    {"☆".repeat(5 - review.reviewer_rating)}
                  </div>
                </div>
              </div>
              <p className={css.commentText}>{review.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;