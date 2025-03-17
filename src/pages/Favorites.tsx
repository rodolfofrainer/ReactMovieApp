import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie: Movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              year={movie.release_date.substring(0, 4)}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
