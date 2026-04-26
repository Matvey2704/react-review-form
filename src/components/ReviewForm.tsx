import { useState } from 'react';
import type { Review } from '../types/review';

type Props = {
  onAdd: (review: Review) => void;
};

export const ReviewForm = ({ onAdd }: Props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !text.trim()) {
      alert('Заполните все поля');
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    onAdd({
      id: Date.now(),
      name,
      text,
    });

    setName('');
    setText('');
    setIsLoading(false);
  };

  return (
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
  );
};