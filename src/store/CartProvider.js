import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemCartHandeler = (item) => {
    console.log(item.id);
    setItems((prevItems) => [...prevItems, item]);
    // setItems([...items, item]);
    console.log(items);
    // setItems(item);
  };
  const removeItemCartHandeler = (id) => {
    console.log(`passing id to delete ${id}`);
    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemCartHandeler,
    removeItem: removeItemCartHandeler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
