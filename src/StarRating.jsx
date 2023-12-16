import { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 10,
  color = "#fcc914",
  size = 18,
  rating,
  onRating,
}) => {
  const [tempRate, setTempRate] = useState(0);

  const handleMouseEnter = (tempRate) => {
    setTempRate(tempRate);
  };
  const handleMouseLeave = () => {
    setTempRate(0);
  };

  return (
    <div className="flex gap-3 justify-center">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRate ? tempRate >= i + 1 : rating >= i + 1}
            onRate={() => onRating(i + 1)}
            onMouseIn={() => handleMouseEnter(i + 1)}
            onMouseLeave={() => handleMouseLeave()}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p className="text-xs" style={{ color: `${color}` }}>
        {tempRate || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
