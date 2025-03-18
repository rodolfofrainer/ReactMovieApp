import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log(favorites);
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster}
              title={movie.title}
              year={movie.year}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}
