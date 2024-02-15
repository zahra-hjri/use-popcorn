const ErrorMessage = ({ message }) => {
  return (
    <div className="text-black bg-slate-900 rounded-lg p-5 w-80 text-center font-bold">
      {message}📛
    </div>
  );
};

export default ErrorMessage;
