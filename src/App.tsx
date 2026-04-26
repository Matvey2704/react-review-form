import { useState } from 'react';
import './App.css';

type Review = {
  id: number;
  name: string;
  text: string;
};

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !text.trim()) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const newReview: Review = {
      id: Date.now(),
      name,
      text,
    };

    setReviews((prev) => [newReview, ...prev]);
    setName('');
    setText('');
    setIsLoading(false);
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

          <form className="form" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ваше имя"
            />

            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Ваш отзыв"
              rows={4}
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Отправка...' : 'Отправить отзыв'}
            </button>
          </form>
        </div>

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
      </section>
    </main>
  );
}

export default App;