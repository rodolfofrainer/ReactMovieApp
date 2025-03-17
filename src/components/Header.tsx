import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <button>Movie App</button>
      </div>
      <div className="links">
        <button className="home">Home</button>
        <button className="favorites">Favorites</button>
      </div>
    </header>
  );
}
