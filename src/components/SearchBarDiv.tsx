export default function () {
  return (
    <div className="search-bar-form">
      <form method="get">
        <input
          type="text"
          name="search-bar"
          id="searchbar"
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
