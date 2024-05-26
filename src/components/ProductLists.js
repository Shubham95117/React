import React, { useContext } from "react";
import ProductContext from "../store/products_context";
import CartContext from "../store/cart_context";

const ProductLists = () => {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);

  const addItemCartHandler = (item) => {
    cartCtx.addItemToCart({
      ...item,
      quantity: 1,
    });
    productCtx.addProduct(it);
  };

  const products = productCtx.products.map((item) => (
    <tr key={item.id}>
      <td>{item.medicineName}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>
        <button onClick={() => addItemCartHandler(item)}>Add to Cart</button>
      </td>
    </tr>
  ));

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>Product Lists</h2>
        {productCtx.products.length > 0 && (
          <table border="1">
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
        )}
      </div>
    </div>
  );
};

export default ProductLists;
