import React, { useState } from "react";
import CartContext from "./../store/cart_context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });

    setTotalQuantity((prevQuantity) => prevQuantity + newItem.quantity);
    setTotalAmount(
      (prevAmount) => prevAmount + newItem.price * newItem.quantity
    );
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
      if (!itemToRemove) return prevItems;

      const updatedItems = prevItems.filter((item) => item.id !== id);
      setTotalQuantity((prevQuantity) => prevQuantity - itemToRemove.quantity);
      setTotalAmount(
        (prevAmount) => prevAmount - itemToRemove.price * itemToRemove.quantity
      );

      return updatedItems;
    });
  };

  const cartContext = {
    cartItems: cartItems,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
