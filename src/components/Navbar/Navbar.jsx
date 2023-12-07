// import Search from "../Search/Search";
// import ResultNumberMovies from "../ResultNumberMovies/ResultNumberMovies";
// import Logo from "../Logo/Logo";

const Navbar = ({ children }) => {
  return (
    <nav className="text-white flex bg-cyan-950 rounded-md p-2 sm:p-2 md:p-3 lg:p-4 justify-between mb-3">
      {children}
      {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:w-2/3">
        <Logo />
        <Search />
      </div>
      <ResultNumberMovies movies={movies} /> */}
    </nav>
  );
};

export default Navbar;
