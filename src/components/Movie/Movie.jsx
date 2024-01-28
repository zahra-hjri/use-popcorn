const Movie = ({ movie, children, onSelctionId }) => {
  return (
    <div
      className="flex justify-between hover:bg-slate-700 rounded-lg px-1 "
      onClick={() => onSelctionId(movie.imdbID)}
    >
      <div className="flex p-4">
        <div className="mr-4">
          <img className="w-10 h-12" src={movie.poster} alt={movie.title} />
        </div>
        <div className="text-white text-xs flex flex-col ">
          <span className="pb-2 font-bold">{movie.title}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Movie;
