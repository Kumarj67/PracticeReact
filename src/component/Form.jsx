import React, { useState } from "react";
import "./Form.css";

const Form = ({ onAddCart }) => {
  const [item, setItem] = useState({
    time: "1 Month Ago",
  });
  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log(item);
  }
  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    onAddCart(item);
    console.log(item);
  }
  return (
    <div>
      <div className="flex p-4 w-[60px] h-[60px]">
        <input
          type="text"
          placeholder="Title of Cart"
          className="input"
          onChange={handleChange}
          name="title"
          // value={item.title}
        />
        <input
          type="text"
          placeholder="Price"
          className="input"
          onChange={handleChange}
          name="price"
          // value={item.price}
        />
        <input
          type="text"
          placeholder="Quantity"
          className="input"
          onChange={handleChange}
          name="quantity"
          // value={item.Quantity}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
