import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import { BiEditAlt } from "react-icons/bi";
import { GrCompliance } from "react-icons/gr";

const CartItem = ({ title, Quantity, price, id, children }) => {
  return (
    <div>
      <div className="p-4 flex w-half">
        <img
          src={`http://placeimg.com/640/480/${id}`}
          className="w-[100px] h-[100px]"
          alt=""
        />
        <div className="p-2 flex-row">
          <h1 className="font-medium "> {title} </h1>
          <h2>Price:{price}</h2>
          <h2>Quantity:{Quantity}</h2>
          <GrCompliance size={20} className="mt-[10px]" />
          <BiEditAlt size={20} className="mt-[-20px] ml-[25px]" />
          <FaRegTrashAlt size={20} className="mt-[-20px] ml-[50px]" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
