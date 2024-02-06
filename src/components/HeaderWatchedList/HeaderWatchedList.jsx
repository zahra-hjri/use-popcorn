const HeaderWatchedList = ({ watched, rating }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  console.log(rating);

  const avgImdbRating = average(watched.map((movie) => movie.rate));
  const avgUserRating = average(watched.map((movie) => movie.rating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div>
      <div className="flex justify-between p-2 shadow-xl bg-slate-900 rounded-lg">
        <div className="flex p-2">
          <div className="text-white text-xs flex flex-col ">
            <h2 className="pb-3 font-bold">MOVIES YOU WATCHED</h2>
            <div className="flex">
              <span className="pr-2">♒ {watched.length} movie</span>
              <span className="">⭐{avgImdbRating}</span>
              <span className="px-3">🌟{avgUserRating}</span>
              <span className="">⏳{avgRuntime}min </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWatchedList;
