import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((accm, curN) => {
    return accm + curN.price * curN.quantity;
  }, 0);

  //findind same items and showong
  const groupedItems = [];

  cartCtx.items.forEach((item) => {
    const existingItem = groupedItems.find((group) => group.id === item.id);

    if (existingItem) {
      existingItem.quantity += parseInt(item.quantity, 10); // Ensure quantity is treated as a number
    } else {
      groupedItems.push({ ...item, quantity: parseInt(item.quantity, 10) }); // Ensure quantity is treated as a number
    }
  });

  const CartItems = (
    // <ul className={classes["cart-items"]}>
    //   {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
    //     <li>{item.name}</li>
    //   ))}
    // </ul>
    <ul className={classes["cart-items"]}>
      {groupedItems.map((item) => (
        <li
          key={item.id}
        >{`Name : ${item.name} Price : ${item.price}  Quantity : ${item.quantity}`}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}>{CartItems}</div>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
