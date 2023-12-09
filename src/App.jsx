import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Box from "./components/Box/Box";
import TempMovieList from "./components/TempMovieList/TempMovieList";
import WatchedMoviesList from "./components/WatchedMoviesList/WatchedMoviesList";
import WatchedDetail from "./components/WatchedDetail/WatchedDetail";
import tempWatchedData from "./data/tempWatchedData";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import ResultNumberMovies from "./components/ResultNumberMovies/ResultNumberMovies";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const KEY = "f84fc31d";

const App = () => {
  /******************* variables ***********************/
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleSelectionId = (Id) => {
    setSelectedId((selectedId) => (selectedId === Id ? null : Id));
  };

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  const handleCloseDetail = () => {
    setSelectedId(null);
  };

  /******************* START FETCH DATA ***********************/
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          console.log(res);
          if (!res.ok)
            throw new Error("somthing went worng with fetching movie");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie is not found");
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );
  /*******************END FETCH DATA ***********************/

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
            />
          ) : (
            // <WatchedDetail watched={watched} />
            <WatchedMoviesList watched={watched} />
          )}
        </Box>
      </main>
    </div>
  );
};

export default App;
