import Header from "./components/Header";
import SearchBarDiv from "./components/SearchBarDiv";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <body>
      <Header />
      <main>
        <SearchBarDiv />
        <div className="movies-cards-container">
          <MovieCard />
        </div>
      </main>
    </body>
  );
}

export default App;
