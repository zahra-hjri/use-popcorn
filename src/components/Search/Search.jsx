import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.code === "Enter") {
  //         inputEl.current.focus();
  //         setQuery("");
  //         console.log(e.code);
  //       }
  //       document.addEventListener("keydown", callback);
  //       return () => document.addEventListener("keydown", callback);
  //     }
  //   },
  //   [setQuery]
  // );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-cyan-800 mt-2 sm:mt-0 rounded-md sm:p-1 w-48 sm:w-64 lg:w-96 placeholder:text-xs placeholder:px-1 placeholder:text-white outline-none"
        placeholder="Search Movies ..."
        ref={inputEl}
      />
    </div>
  );
};

export default Search;
