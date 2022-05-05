import React from "react";
import { BiCartAlt } from "react-icons/bi";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-icon" />
      <span className="total-price"> 2313 грн. </span>
    </div>
  );
};
