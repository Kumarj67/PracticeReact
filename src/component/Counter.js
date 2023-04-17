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
      <h1>{number}</h1>
      <button type="Submit" onClick={handleClick}>
        Counter
      </button>
    </div>
  );
};

export default Counter;
