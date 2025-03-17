import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api.ts";
import { Movie } from "../types/Movie.tsx";

import MovieCard from "../components/MovieCard";

import "../css/Home.css";
import "../css/SearchBar.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
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
          id={filteredMovie.id}
          key={filteredMovie.id}
          poster={filteredMovie.poster_path}
          year={filteredMovie.release_date.substring(0, 4)}
          title={filteredMovie.title}
        />
      ));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

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
      {error ? (
        <div className="error-message">Something went wrong</div>
      ) : undefined}
      {loading ? (
        <div className="loading">loading</div>
      ) : (
        <div className="movie-cards">{movieCards()}</div>
      )}
    </main>
  );
}
