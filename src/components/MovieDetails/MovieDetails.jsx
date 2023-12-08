import { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
const KEY = "f84fc31d";

const MovieDetails = ({ selectedId, onCloseDetail }) => {
  const [movie, setMovie] = useState({});

  const { Title: title, Poster: poster, Year: year } = movie;

  useEffect(function () {
    async function getMovieSelected() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
    }
    getMovieSelected();
  }, []);

  return (
    <div>
      <button onClick={onCloseDetail} className="">
        <IoChevronBackCircle className="text-white text-3xl" />
      </button>
      <div className="flex p-2 bg-slate-700">
        <img className="h-48 w-28" src={poster} alt={title} />
        <div className="text-center">
          <p className="text-white font-bold text-lg p-5">{title}</p>
          <p className="text-white">{year}</p>
        </div>
      </div>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
