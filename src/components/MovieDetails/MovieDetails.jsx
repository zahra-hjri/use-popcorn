import { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import StarRating from "../../StarRating";
const KEY = "f84fc31d";

const MovieDetails = ({ selectedId, onCloseDetail, watched, setWatched }) => {
  const [movie, setMovie] = useState({});

  const handleAddWatchedMovie = () => {
    setWatched([...watched, movie]);
  };
  const {
    Title: title,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating: rate,
    Plot: plot,
  } = movie;

  useEffect(
    function () {
      async function getMovieSelected() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setMovie(data);
        console.log(data);
      }
      getMovieSelected();
    },
    [selectedId]
  );

  return (
    <div className="relative rounded-lg">
      <button onClick={onCloseDetail} className="absolute top-1 left-1">
        <IoChevronBackCircle className="text-white text-3xl" />
      </button>
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
            <em className="text-slate-300 text-xs">⭐ {rate} IMDb Rating</em>
          </p>
        </div>
      </header>
      <main className="p-8">
        <div className="flex flex-col bg-slate-800 rounded-lg p-5">
          <StarRating />
          <button className="bg-blue-700 text-white rounded-2xl w-2/3 my-3 mx-auto px-2 py-1">
            + Add to list
          </button>
        </div>
        <p className="p-5 text-justify">
          <em className="text-slate-300 text-xs">{plot}</em>
        </p>
      </main>
      <button
        onClick={handleAddWatchedMovie}
        className="bg-green-700 rounded-2xl px-5 py-2 text-white font-bold text-xs mx-auto flex"
      >
        +add to watch
      </button>
      {/* {selectedId} */}
    </div>
  );
};

export default MovieDetails;
