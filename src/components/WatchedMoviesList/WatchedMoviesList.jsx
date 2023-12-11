import Movie from "../Movie/Movie";

const WatchedMoviesList = ({ watched, children }) => {
  return (
    <div>
      {children}
      <div>
        {watched.map((movie) => (
          <Movie key={movie.imdbID} movie={movie}>
            <div className="flex">
              <span>⭐{movie.imdbRating}</span>
              <span className="px-3">🌟{movie.userRating}</span>
              <span className="">⏳{movie.Runtime} </span>
            </div>
          </Movie>
        ))}
      </div>
    </div>
  );
};

export default WatchedMoviesList;
