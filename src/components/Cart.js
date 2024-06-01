import React, { useCallback, useContext, useEffect } from "react";
import CartContext from "../store/cart-context";
import ProductContext from "../store/products_context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const intialQuantity = (id) => {
    const quantity = productCtx.products.find((p) => p.id === id).qty;
    return quantity;
  };

  const removeCartItemHandler = (id, item) => {
    cartCtx.removeCart(id);
    productCtx.addProduct(item);
  };

  const reduceCartHandler = (item, qty) => {
    if (qty > 1) {
      cartCtx.reduceCart(item.id);
      productCtx.addProduct({
        ...item,
        qty: 1,
      });
    } else {
      removeCartItemHandler(
        item.id,
        cartCtx.cartItems.find((elem) => elem.id === item.id)
      );
    }
  };

  const addCartHandler = (item) => {
    cartCtx.addCart({
      ...item,
      qty: 1,
    });
    productCtx.reduceProductQty(item.id, 1);
  };

  const items = cartCtx.cartItems.map((item) => {
    return (
      <div className={classes.container} key={item.id}>
        <div>
          <span className={classes.title}>{item.medicineName}</span>
        </div>

        <div className={classes.border}>
          {" "}
          <button
            className={classes.add}
            disabled={item.qty >= intialQuantity(item.id) + item.qty}
            onClick={() => addCartHandler(item)}
          >
            +
          </button>
          <button className={classes.quantity}>x{item.qty}</button>
          <button
            className={classes.rem}
            onClick={() => reduceCartHandler(item, item.qty)}
          >
            -
          </button>
        </div>
        <div>
          <button
            className={classes.button}
            onClick={() => removeCartItemHandler(item.id, item)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartItems}>
        {items.length > 0 ? (
          <div>
            {items}
            <div className={classes.total}>
              <span>Total Amount: </span>
              <span className={classes.price}>{` $${cartCtx.totalAmt} `}</span>
            </div>
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
              <button className={classes.button} onClick={props.onClose}>
                Order
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3>No items in the cart.</h3>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
