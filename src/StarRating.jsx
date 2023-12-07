import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 10, color = "#fcc914", size = 30 }) => {
  const [rating, setRate] = useState(0);
  const [tempRate, setTempRate] = useState(0);
  const handleRating = (rating) => {
    setRate(rating);
  };
  const handleMouseEnter = (tempRate) => {
    setTempRate(tempRate);
  };
  const handleMouseLeave = () => {
    setTempRate(0);
  };
  return (
    <div className="flex gap-5 items-center justify-center h-screen bg-slate-500">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRate ? tempRate >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onMouseIn={() => handleMouseEnter(i + 1)}
            onMouseLeave={() => handleMouseLeave()}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={{ fontSize: `${size}px`, color: `${color}` }}>
        {tempRate || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
