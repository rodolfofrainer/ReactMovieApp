import "../css/SearchBar.css";

type props = {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function (props: props) {
  return (
    <div className="search-bar-form">
      <form method="get" onSubmit={props.handleSubmit}>
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
