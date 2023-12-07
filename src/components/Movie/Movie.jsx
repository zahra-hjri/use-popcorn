const Movie = ({ movie, children }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex p-3">
        <div className="w-8 h-8 mr-5">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="text-white text-xs flex flex-col ">
          <span className="pb-2 font-bold">{movie.Title}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Movie;
