import React from "react";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 11.75,
  value: 4.0,
  edit: false,
  activeColor: "#3F414D",
};

function Rating() {
  return (
    <div>
      <ReactStars {...firstExample} />
    </div>
  );
}

export default Rating;
