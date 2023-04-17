import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="flex p-4 w-12 h-12 ">
        <input type="text" placeholder="Title of Cart" className="input" />
        <input type="text" placeholder="Price" className="input" />
        <input type="text" placeholder="Quantity" className="input" />
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
