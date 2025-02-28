import BookItem from '@/components/book-item';
import style from './page.module.css';
import { BookData } from '@/types';

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;

  const allBooks: BookData[] = await response.json();
  console.log(allBooks);
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}
async function RecommendBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;

  const recommendBooks: BookData[] = await response.json();
  console.log(recommendBooks);

  return (
    <div>
      {recommendBooks.map((book) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecommendBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
