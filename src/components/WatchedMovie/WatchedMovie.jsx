const WatchedMovie = ({ watchedMovie }) => {
  return (
    <div className="flex justify-between">
      <div className="flex p-2">
        <div className="w-7 h-7 mr-2">
          <img src={watchedMovie.Poster} alt={watchedMovie.Title} />
        </div>
        <div className="text-white text-xs flex flex-col ">
          <span className="pb-2 font-bold">{watchedMovie.Title}</span>
          <div className="flex">
            <span>⭐{watchedMovie.imdbRating}</span>
            <span className="px-3">🌟{watchedMovie.userRating}</span>
            <span className="">⏳{watchedMovie.runtime} min </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchedMovie;
