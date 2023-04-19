import React, { useState } from "react";

const ReviewButton = ({ message, children, onPlay, onPause }) => {
  const [Playing, setPlaying] = useState(false);
  // let Playing = false;
  function handleClick(e) {
    e.stopPropagation();
    if (Playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!Playing);
  }
  return (
    <div>
      <button
        type=""
        className="bg-gray-800 text-white rounded items-center w-[100px] m-2 "
        onClick={handleClick}
      >
        {children}:{Playing ? ">" : "||"}
      </button>
    </div>
  );
};

export default ReviewButton;
