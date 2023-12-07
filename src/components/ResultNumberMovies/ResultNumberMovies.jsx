const ResultNumberMovies = ({ movies }) => {
  const numMovies = movies.length;
  return (
    <div>
      <h3 className="text-xs md:text-sm lg:text-base sm:p-1">
        Found<span> {numMovies} </span>results
      </h3>
    </div>
  );
};

export default ResultNumberMovies;
