import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addIttem: (Item) => {},
  removeItem: (id) => {},
});

export default CartContext;
