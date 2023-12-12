import Movie from "../Movie/Movie";
import { IoIosCloseCircle } from "react-icons/io";
const WatchedMoviesList = ({ watched, children }) => {
  return (
    <div>
      {children}
      <div>
        {watched.map((movie) => (
          <>
            <div className="flex justify-between">
              <Movie key={movie.imdbID} movie={movie}>
                <div className="flex">
                  <span>⭐{movie.imdbRating}</span>
                  <span className="px-3">🌟{movie.userRating}</span>
                  <span className="">⏳{movie.Runtime} </span>
                </div>
              </Movie>
              <IoIosCloseCircle className="text-red-500 text-xl" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WatchedMoviesList;
