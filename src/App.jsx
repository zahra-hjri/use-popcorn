import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TempMovieList from "./components/TempMovieList/TempMovieList";
// import tempMovieData from "./data/tempMovieData";
import WatchedMoviesList from "./components/WatchedMoviesList/WatchedMoviesList";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import ResultNumberMovies from "./components/ResultNumberMovies/ResultNumberMovies";
import Button from "./components/Button/Button";
import WatchedDetail from "./components/WatchedDetail/WatchedDetail";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const KEY = "f84fc31d";

const App = () => {
  // variables
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const tempQuery = "interstellar";

  // useEffect(function () {
  //   console.log("AFTER RENDER"); // IN FAQAT BAD AZ RENDER AVAL
  // }, []);

  // useEffect(
  //   function () {
  //     console.log("AFTER SEARCH"); // DOVOM IN
  //   },
  //   [query]
  // );

  // useEffect(function () {
  //   console.log("DURING RENDER"); // SEVOM IN
  // });

  // console.log("c");// AVAL IN CHAP MISHE

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("somthing went worng with fetching monie");

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

  const [isOpenWatch, setIsOpenWatch] = useState(true);
  const handleOpenWatch = () => {
    setIsOpenWatch((w) => !w);
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
        {/* {isLoading ? <Loader /> : <TempMovieList movies={movies} />} */}
        {isLoading && <Loader />}
        {!isLoading && !error && <TempMovieList movies={movies} />}
        {error && <ErrorMessage message={error} />}
        <WatchedMoviesList
          watched={watched}
          isOpenWatch={isOpenWatch}
          onHandleOpenWatch={handleOpenWatch}
        >
          <Button onClick={handleOpenWatch}>{isOpenWatch ? "+" : "-"}</Button>
          <WatchedDetail isOpenWatch={isOpenWatch} watched={watched} />
        </WatchedMoviesList>
      </main>
    </div>
  );
};

export default App;
