const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-cyan-800 mt-2 sm:mt-0 rounded-md sm:p-1 w-48 sm:w-64 lg:w-96 placeholder:text-xs placeholder:px-1 placeholder:text-white outline-none"
        placeholder="Search Movies ..."
      />
    </div>
  );
};

export default Search;
