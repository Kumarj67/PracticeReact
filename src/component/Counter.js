import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <div>
      <h1 className="m-4">{number}</h1>
      <button
        type="Submit"
        className="bg-slate-500 text-white ml-4 "
        onClick={handleClick}
      >
        Counter
      </button>
    </div>
  );
};

export default Counter;
