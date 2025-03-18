import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { Movie } from "../types/Movie";

const defaultValue = {
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
};

const MovieContext = createContext(defaultValue);
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem("favorites");
      if (storedFavs) {
        setFavorites(JSON.parse(storedFavs));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => {
      const updatedFavorites = [...prev, movie];
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => {
      const filteredFavorites = prev.filter(
        (movie: Movie) => movie.id !== movieId
      );
      return filteredFavorites;
    });
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie: Movie) => movie.id === movieId);
  };

  const value = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
    }),
    [favorites, addToFavorites, removeFromFavorites, isFavorite]
  );

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
