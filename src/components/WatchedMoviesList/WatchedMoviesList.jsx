import Movie from "../Movie/Movie";

const WatchedMoviesList = ({ watched, isOpenWatch, children }) => {
  return (
    <div>
      {children}

      {isOpenWatch && (
        <div>
          {watched.map((movie) => (
            <Movie key={movie.Title} movie={movie}>
              <div className="flex">
                <span>⭐{movie.imdbRating}</span>
                <span className="px-3">🌟{movie.userRating}</span>
                <span className="">⏳{movie.runtime} min </span>
              </div>
            </Movie>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchedMoviesList;
