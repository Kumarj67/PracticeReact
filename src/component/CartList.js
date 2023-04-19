import React from "react";
import CartItem from "./CartItem";
import ReviewButton from "./ReviewButton";
import Counter from "./Counter";
const CartList = ({ items, onDeleteItems, onEditItems, onUpdateItems }) => {
  return (
    <div>
      <div onClick={() => console.log("hello")} className="w-half">
        {items.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            Quantity={item.Quantity}
            time={item.time}
            id={item.id}
            DeleteItem={onDeleteItems}
            EditItem={onEditItems}
            UpdateItem={onUpdateItems}
          >
            <ReviewButton
              onPlay={() => console.log("Play", item.title)}
              onPause={() => console.log("Pause and Remove ", item.title)}
            >
              {item.title}
            </ReviewButton>
          </CartItem>
        ))}
        <Counter></Counter>
      </div>
    </div>
  );
};

export default CartList;
