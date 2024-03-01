import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [items, updateitems] = useState([]);
  const addItemTOCartHandler = (item) => {
    updateitems([...items, item]);
  };
  const removeItemFormCartHandler = (item) => {};

  const cartContext = {
    items: items,
    addItem: addItemTOCartHandler,
    removeItem: removeItemFormCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
