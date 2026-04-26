import { useState } from 'react';
import './App.css';
import { ReviewForm } from './components/ReviewForm';
import { ReviewList } from './components/ReviewList';
import type { Review } from './types/review';

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleAddReview = (review: Review) => {
    setReviews((prev) => [review, ...prev]);
  };

  return (
    <main className="page">
      <section className="card">
        <div className="content">
          <p className="eyebrow">React + TypeScript</p>
          <h1>Review Form</h1>
          <p className="description">
            Небольшой проект с формой отзывов, имитацией API-запроса,
            loading-состоянием и обновлением списка после отправки.
          </p>

          <ReviewForm onAdd={handleAddReview} />
        </div>

        <ReviewList reviews={reviews} />
      </section>
    </main>
  );
}

export default App;