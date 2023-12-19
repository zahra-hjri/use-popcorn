import { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import StarRating from "../StarRaiting/StarRating";
import Loader from "../Loader";

const KEY = "f84fc31d";

const MovieDetails = ({
  selectedId,
  onCloseDetail,
  watched,
  isLoading,
  setIsLoading,
  rating,
  setRate,
  onRating,
  onAddWatchedMovie,
}) => {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
  } = movie;

  function handleAdd() {
    const newMovie = {
      imdbID: selectedId,
      title,

      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      poster,
    };
    onAddWatchedMovie(newMovie);
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      async function getMovieSelected() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setIsLoading(false);
        setMovie(data);
      }
      getMovieSelected();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title} `;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );
  return (
    <div className="relative rounded-lg">
      <button onClick={onCloseDetail} className="absolute top-1 left-1">
        <IoChevronBackCircle className="text-white text-3xl" />
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="detailes">
          <header className="flex ">
            <img className="h-44 w-32" src={poster} alt={title} />
            <div className="p-6">
              <p className="text-white font-medium text-sm">{title}</p>
              <p>
                <em className="text-white text-xs">
                  <span>{released} . </span>
                  <span> {runtime}</span>
                </em>
              </p>
              <em className="text-slate-300 text-xs">{genre}</em>
              <p>
                <em className="text-slate-300 text-xs">
                  ⭐ {rate} IMDb Rating
                </em>
              </p>
            </div>
          </header>
          <main className="p-8">
            <div className="flex flex-col bg-slate-800 rounded-lg p-5">
              <StarRating />
              <button
                onClick={handleAdd}
                className="bg-blue-800 text-white rounded-2xl w-2/3 mt-7 mx-auto px-2 py-1"
              >
                + Add to list
              </button>
            </div>
            <p className="p-5 text-justify">
              <em className="text-slate-300 text-xs">{plot}</em>
            </p>
          </main>
        </div>
      )}
      {/* {selectedId} */}
    </div>
  );
};

export default MovieDetails;
