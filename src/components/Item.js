import React, { useState } from "react";



function Item({ name, category }) {

  const [isInCart, setIsOn] = useState(false);
  const inCartBtnText = isInCart ? "Remove From Cart" : "Add to Cart"
  const inCartList = isInCart ? "in-cart" : ""
  const inCartBtn = isInCart ? "remove" : "add"

  function handleClick(){
    setIsOn((isInCart) => !isInCart);
  }
  return (
    <li className={inCartList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCartBtn} onClick={handleClick}>{inCartBtnText}</button>
    </li>
  );
}

export default Item;
