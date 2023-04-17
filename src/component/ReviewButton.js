import React from "react";

const ReviewButton = ({ message, children, onPlay, onPause }) => {
  let Playing = false;
  function handleClick(e) {
    e.stopPropagation();
    if (Playing) {
      onPause();
    } else {
      onPlay();
    }
    Playing = !Playing;
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
