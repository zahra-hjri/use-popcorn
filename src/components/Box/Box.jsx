// import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Box = ({ children, isOpen, onOpen }) => {
  return (
    <div className="w-72 md:w-80 lg:w-96 mx-auto md:mx-6 bg-slate-800 min-h-screen rounded-lg relative">
      <div className="flex justify-end">
        <button
          className="text-lg absolute top-2 right-2 text-slate-500"
          onClick={onOpen}
        >
          {isOpen ? <FaPlusCircle /> : <FaMinusCircle />}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Box;
