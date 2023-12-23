import Movie from "../Movie/Movie";

const MoviesList = ({ movies, onSelctionId, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <>
          <div>
            {movies.map((movie) => (
              <Movie
                movie={movie}
                key={movie.imdbID}
                onSelctionId={onSelctionId}
              >
                <span>📅 {movie.Year}</span>
              </Movie>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
