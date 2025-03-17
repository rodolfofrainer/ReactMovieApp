function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <button>Movie App</button>
        </div>
        <div className="links">
          <button className="home">Home</button>
          <button className="favorites">Favorites</button>
        </div>
      </header>
      <div className="search-bar-form">
        <form method="get">
          <input type="text" name="search-bar" id="searchbar" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
