import type { Review } from '../types/review';

type Props = {
  reviews: Review[];
};

export const ReviewList = ({ reviews }: Props) => {
  return (
    <div className="reviews">
      <h2>Отзывы</h2>

      {reviews.length === 0 ? (
        <p className="empty">Пока отзывов нет</p>
      ) : (
        reviews.map((review) => (
          <article className="review" key={review.id}>
            <strong>{review.name}</strong>
            <p>{review.text}</p>
          </article>
        ))
      )}
    </div>
  );
};