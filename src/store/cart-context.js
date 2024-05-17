import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 10,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
