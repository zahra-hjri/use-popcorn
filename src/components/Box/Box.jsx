import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Box = ({ children, isOpen, onOpen }) => {
  return (
    <div className="w-72 md:w-80 lg:w-96 mx-auto md:mx-5 bg-slate-900 min-h-screen rounded-lg">
      <div className="flex justify-end pr-3 pt-3">
        <button className="text-xl " onClick={onOpen}>
          {isOpen ? <FaPlusCircle /> : <FaMinusCircle />}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Box;
