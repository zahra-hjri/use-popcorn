import Movie from "../Movie/Movie";
import Button from "../Button/Button";
import { useState } from "react";

const TempMovieList = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="w-72 mx-auto md:mx-5 bg-slate-900 min-h-full rounded-lg">
      <Button onClick={handleOpen}>{isOpen ? "+" : "-"}</Button>

      {isOpen && (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.Title}>
              <span>📅 {movie.Year}</span>
            </Movie>
          ))}
        </div>
      )}
    </div>
  );
};

export default TempMovieList;
