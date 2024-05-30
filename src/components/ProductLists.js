import React, { useContext, useState } from "react";
import ProductContext from "../store/products_context";
import CartContext from "../store/cart-context";
import "./ProductLists.css";
const ProductLists = () => {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);
  const addCartHandler = (item) => {
    cartCtx.addCart({ ...item, qty: 1 });
    productCtx.reduceProductQty(item.id);
  };
  const products = productCtx.products.map((item) => (
    <tr key={item.id}>
      <td>{item.medicineName}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>
        <button
          className={`${item.qty === 0 ? "disable" : ""}`}
          disabled={item.qty === 0}
          onClick={() => addCartHandler(item)}
        >
          Add to Cart
        </button>
      </td>
    </tr>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "350px",
      }}
    >
      {" "}
      {productCtx.products.length > 0 && (
        <div
          style={{
            border: "2px solid black ",
            width: "500px",
            marginTop: "50px",
          }}
        >
          <table style={{ marginLeft: "35px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductLists;
