import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";

import MovieCard from "../components/MovieCard";

import "../css/Home.css";
import "../css/SearchBar.css";

type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies); // Check the structure here
        setMovies(popularMovies);
      } catch (err: any) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const movieCards = () => {
    return movies
      .filter((movie: Movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((filteredMovie) => (
        <MovieCard
          key={filteredMovie.id}
          poster={filteredMovie.poster_path}
          year={filteredMovie.release_date.substring(0, 4)}
          title={filteredMovie.title}
        />
      ));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(searchQuery);
  }

  return (
    <main>
      <div className="search-bar-form">
        <form method="get" onSubmit={handleSubmit}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            type="text"
            name="search-bar"
            id="searchbar"
            placeholder="Search for movies..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="movie-cards">{movieCards()}</div>
    </main>
  );
}
