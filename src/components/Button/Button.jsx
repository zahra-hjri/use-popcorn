const Button = ({ onClick, children }) => {
  return (
    <div className="flex justify-end pt-2 pr-2">
      <button
        onClick={onClick}
        className="rounded-full px-2.5 py-0.5 bg-slate-500 text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
