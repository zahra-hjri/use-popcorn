import Movie from "../Movie/Movie";
import { IoIosCloseCircle } from "react-icons/io";
const WatchedMoviesList = ({ watched, children, onDelete, rating }) => {
  return (
    <div>
      {children}
      <div>
        {watched.map((movie) => (
          <>
            <div className="flex justify-between hover:bg-slate-700 rounded-lg">
              <Movie key={movie.imdbID} movie={movie}>
                <div className="flex">
                  <span>⭐{movie.imdbRating}</span>
                  <span className="px-3">🌟{movie.rating}</span>
                  <span className="">⏳{movie.Runtime} </span>
                </div>
              </Movie>
              <IoIosCloseCircle
                onClick={() => onDelete(movie.imdbID)}
                className="text-red-500 text-xl m-2"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WatchedMoviesList;
