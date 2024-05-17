import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemCartHandeler = (item) => {};
  const removeItemCartHandeler = (id) => {};
  const cartContext = {
    items: [],
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
