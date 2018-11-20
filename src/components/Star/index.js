
import React from "react";

const Star = () => {
  const width = 210,
        height = 210,
        viewBox = [0, 0, width, height].join(' '),
        points = '100,10 40,198 190,78 10,78 160,198';

  return (

        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg">
          <polygon points={points} />
        </svg>

  );
};

export default Star;
