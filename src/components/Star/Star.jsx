import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = ({ onRate, full, onMouseIn, onMouseLeave, color, size }) => {
  return (
    <div onClick={onRate} onMouseEnter={onMouseIn} onMouseLeave={onMouseLeave}>
      {full ? (
        <AiFillStar color={color} fontSize={size} />
      ) : (
        <AiOutlineStar color={color} fontSize={size} />
      )}
    </div>
  );
};

export default Star;
