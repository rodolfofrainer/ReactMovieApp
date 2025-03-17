import "../css/MovieCard.css";

type MovieCardProps = {
  poster: string;
  title: string;
  year: string;
};

export default function MovieCard({ poster, title, year }: MovieCardProps) {
  function handleFavButton() {
    alert("Fav");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={`${title} poster`}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavButton}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}
