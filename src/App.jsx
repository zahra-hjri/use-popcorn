import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Box from "./components/Box/Box";
import TempMovieList from "./components/TempMovieList/TempMovieList";
import WatchedMoviesList from "./components/WatchedMoviesList/WatchedMoviesList";
import WatchedDetail from "./components/WatchedDetail/WatchedDetail";
import { useMovies } from "./useMovies";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import ResultNumberMovies from "./components/ResultNumberMovies/ResultNumberMovies";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  /******************* variables ***********************/
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { movies, error } = useMovies(query);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [rating, setRate] = useState(0);
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  const handleRating = (rating) => {
    setRate(rating);
    console.log(rating);
  };

  const handleSelectionId = (Id) => {
    setSelectedId((selectedId) => (selectedId === Id ? null : Id));
  };

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };
  const handleAddWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleCloseDetail = () => {
    setSelectedId((selectedId) => !selectedId);
  };

  const handleDeleteWatchedMovie = (id) => {
    const removeItem = watched.filter((i) => i.imdbID !== id);
    setWatched(removeItem);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-3 md:p-5">
      <Navbar>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:w-2/3">
          <Logo />
          <Search query={query} setQuery={setQuery} />
        </div>
        <ResultNumberMovies movies={movies} />
      </Navbar>
      <main className="main flex flex-col md:flex-row justify-center">
        <Box isOpen={isOpen} onOpen={handleOpen}>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <TempMovieList
              movies={movies}
              onSelctionId={handleSelectionId}
              isOpen={isOpen}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseDetail={handleCloseDetail}
              watched={watched}
              setWatched={setWatched}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              rating={rating}
              setRate={setRate}
              onRating={handleRating}
              handleAddWatchedMovie={handleAddWatchedMovie}
            />
          ) : (
            <div>
              <WatchedDetail watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDelete={handleDeleteWatchedMovie}
              />
            </div>
          )}
        </Box>
      </main>
    </div>
  );
};

export default App;
