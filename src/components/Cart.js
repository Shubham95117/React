import React, { useContext, useState } from "react";
import CartContext from "../store/cart_context";

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cartItems, totalQuantity, totalAmount, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        style={{ position: "fixed", left: "10px", top: "10px" }}
      >
        Cart
      </button>
      {toggle && (
        <div style={{ position: "fixed", left: "10px", top: "50px" }}>
          <h2>Cart</h2>
          <ul>
            {cartItems &&
              cartItems.map((item) => (
                <li key={item.id}>
                  {item.medicineName} - Quantity: {item.quantity} - Total: $
                  {(item.price * item.quantity).toFixed(2)}
                  <button onClick={() => removeItemFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
          </ul>
          <div>
            <strong>Total Quantity: {totalQuantity}</strong>
          </div>
          <div>
            <strong>Total Amount: ${totalAmount.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
