import { home } from '@/data/home';
import Link from 'next/link';
import gen from '@/lib/gen';

export default async function Home() {
  const data = await gen(home[0].input);

  if (!data) return null;

  return (
    <article className="article island">
      <section className="list-novel">
        <div className="list">
          {data?.novelList.map((n, i) => {
            return (
              <Link
                className="book"
                key={i}
                href={`/${n.link?.split('/')[3]}` || 'hello'}
              >
                <div className="cover">
                  {/* <figure className=""> */}
                  <img
                    className="h-44 max-h-full w-full rounded-md"
                    src={
                      n.cover || 'https://cdn.chivi.app/covers/8jd76xk8.webp'
                    }
                    alt={n.name}
                  />
                  {/* </figure> */}
                  <div className="book_name">{n.name}</div>
                  <div className="book_author">{n.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
}
