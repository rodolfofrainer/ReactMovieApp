import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <MovieProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={
              <div className="fav-div">
                <Favorites />
              </div>
            }
          />
        </Routes>
      </MovieProvider>
    </main>
  );
}

export default App;
