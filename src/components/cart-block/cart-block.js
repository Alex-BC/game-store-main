import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";
import { calcTotalPrice } from "../utils";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart); //отримуємо масив, який в кошику
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    //коли ф-я передається як пропс, саме час юзати callBack
    setIsCartMenuVisible(false);
    navigate("./order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="total-price"> {totalPrice} грн. </span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div> //ф-я handleClick пропс
  );
};
