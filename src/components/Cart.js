import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import ProductContext from "../store/products_context";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);
  const [toggle, setToggle] = useState(false);
  console.log(cartCtx);
  const items = cartCtx.cartItems.map((item) => {
    const removeCartItemHandler = (id, item) => {
      cartCtx.removeCart(id);
      productCtx.addProduct(item);
    };
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          <span style={{ fontSize: "bold" }}>{item.medicineName}</span>
          <span>x{item.qty}</span>
          {/* <button
        onClick={() =>
          cartCtx.addCart({
            ...item,
            qty: 1,
          })
        }
        >
        +
      </button> */}
          {/* <button onClick={() => cartCtx.reduceCart(item.id)}>-</button> */}
          {/* <button onClick={() => cartCtx.removeCart(item.id)}>Remove</button> */}
          <button onClick={() => removeCartItemHandler(item.id, item)}>
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>cart</button>
      {toggle && (
        <div>
          {items.length > 0 ? (
            <div>
              {items}
              <div>
                <h3>Total Amount: {cartCtx.totalAmt}</h3>
              </div>
            </div>
          ) : (
            <div>
              <h3>No items in the cart.</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
