import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app-body">
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
    </main>
  );
}

export default App;
