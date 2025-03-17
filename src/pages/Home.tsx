import SearchBarDiv from "../components/SearchBarDiv";
import MovieCard from "../components/MovieCard";

import "../css/Home.css";

type Movie = {
  id: number;
  poster: string;
  year: string;
  title: string;
};

export default function Home() {
  const movies: Movie[] = [
    {
      id: 1,
      poster: "src/assets/psoter.webp",
      year: "2007",
      title: "Deadpool",
    },
    {
      id: 2,
      poster: "src/assets/psoter.webp",
      year: "2008",
      title: "Godfather",
    },
    {
      id: 3,
      poster: "src/assets/psoter.webp",
      year: "2004",
      title: "Mr. Monk",
    },
    {
      id: 4,
      poster: "src/assets/psoter.webp",
      year: "2002",
      title: "Lord Of The Ring",
    },
    {
      id: 5,
      poster: "src/assets/psoter.webp",
      year: "2005",
      title: "No country for old men",
    },
    {
      id: 6,
      poster: "src/assets/psoter.webp",
      year: "2005",
      title: "District 9",
    },
    {
      id: 7,
      poster: "src/assets/psoter.webp",
      year: "2008",
      title: "Stay Alive",
    },
    {
      id: 8,
      poster: "src/assets/psoter.webp",
      year: "2000",
      title: "Watchmen",
    },
    {
      id: 9,
      poster: "src/assets/psoter.webp",
      year: "2002",
      title: "Cinema Paradiso",
    },
  ];

  const movieCards = movies.map((entry) => (
    <MovieCard
      key={entry.id}
      poster={entry.poster}
      year={entry.year}
      title={entry.title}
    />
  ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget.searchbar.value);
  }

  return (
    <main>
      <SearchBarDiv handleSubmit={handleSubmit} />
      <div className="movie-cards">{movieCards}</div>
    </main>
  );
}
