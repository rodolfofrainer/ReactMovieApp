import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <button>Movie App</button>
        </a>
      </div>
      <div className="links">
        <a href="/">
          <button className="home">Home</button>
        </a>
        <a href="/favorites">
          <button className="favorites">Favorites</button>
        </a>
      </div>
    </header>
  );
}
