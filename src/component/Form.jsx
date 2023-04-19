import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ onAddCart, onEditableItem, onUpdateItems }) => {
  const initialState = {
    title: "",
    price: "",
    Quantity: "",
    time: "1 Month Ago",
  };
  const [item, setItem] = useState(initialState);

  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log(item);
  }
  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    if (onEditableItem) {
      onUpdateItems(item);
    } else {
      onAddCart(item);
    }

    setItem(initialState);
    console.log(item);
  }
  // To edit item
  useEffect(() => {
    if (onEditableItem) {
      setItem(onEditableItem);
    }
  }, [onEditableItem]);

  return (
    <div>
      <div className="flex p-4 w-[60px] h-[60px]">
        <input
          type="text"
          placeholder="Title of Cart"
          className="input"
          onChange={handleChange}
          name="title"
          value={item.title}
        />
        <input
          type="text"
          placeholder="Price"
          className="input"
          onChange={handleChange}
          name="price"
          value={item.price}
        />
        <input
          type="text"
          placeholder="Quantity"
          className="input"
          onChange={handleChange}
          name="Quantity"
          value={item.Quantity}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          {onEditableItem ? "Edit " : "Add "}
        </button>
      </div>
    </div>
  );
};

export default Form;
