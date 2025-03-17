import "../css/MovieCard.css";

type props = {
  poster: string;
  title: string;
  year: string;
};

export default function MovieCard(props: props) {
  function handleFavButton() {
    alert("Fav");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={props.poster} alt={`${props.title} poster`} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavButton}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{props.title}</h3>
        <p>{props.year}</p>
      </div>
    </div>
  );
}
