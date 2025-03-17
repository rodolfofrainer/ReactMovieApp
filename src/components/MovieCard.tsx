import "../css/MovieCard.css";

export default function MovieCard() {
  return (
    <div className="movie-card">
      <img
        className="movie-image"
        src="src/assets/Image-Engine-Poster-District-9-DT9.webp"
        alt="movie poster"
      />
      <div className="movie-info">
        <p>⭐4.5</p>
        <p style={{ marginRight: "10px" }}>Year</p>
      </div>
      <div className="important-movie-info">
        <p>Movie title</p>
      </div>
    </div>
  );
}
