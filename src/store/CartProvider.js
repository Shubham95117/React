import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmt, setTotalAmt] = useState(0);

  // addItem to cart
  const addCartItemsHandler = (newItems) => {
    // setCartItems((prevItems) => [...prevItems, newItems]);
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((product) => {
        return product.medicineName === newItems.medicineName;
      });
      if (existingItemIndex !== -1) {
        const updatedProducts = [...prevItems];
        updatedProducts[existingItemIndex].qty += newItems.qty;
        setTotalAmt(
          updatedProducts.reduce(
            (total, item) => total + item.price * item.qty,
            0
          )
        );
        return updatedProducts;
      } else {
        const updatedProducts = [...prevItems, newItems];
        setTotalAmt(
          updatedProducts.reduce(
            (total, item) => total + item.price * item.qty,
            0
          )
        );
        return updatedProducts;
      }
    });
  };

  //remove
  const removeCartItemHandler = (id) => {
    const updatedProducts = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(updatedProducts);
    setTotalAmt(
      updatedProducts.reduce((total, item) => total + item.price * item.qty, 0)
    );
  };
  //reduce cart qty
  const reduceCartHandler = (id) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      if (existingItemIndex === -1) return prevItems;

      const updatedItems = [...prevItems];
      if (updatedItems[existingItemIndex].qty > 1) {
        updatedItems[existingItemIndex].qty -= 1;
      } else {
        updatedItems.splice(existingItemIndex, 1); // Remove the item if quantity is 0
      }
      return updatedItems;
    });
  };
  // obj
  const cartContext = {
    cartItems: cartItems,
    addCart: addCartItemsHandler,
    removeCart: removeCartItemHandler,
    reduceCart: reduceCartHandler,
    totalAmt: totalAmt,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
