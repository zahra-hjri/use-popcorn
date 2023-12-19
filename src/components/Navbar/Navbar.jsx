const Navbar = ({ children }) => {
  return (
    <nav className="text-white flex bg-cyan-950 rounded-md p-2 sm:p-2 md:p-3 lg:p-4 justify-between mb-3">
      {children}
    </nav>
  );
};

export default Navbar;
