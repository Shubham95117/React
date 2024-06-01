import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../store/products_context";
import CartContext from "../store/cart-context";
import "./ProductLists.css";

const ProductLists = () => {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);

  // State to keep track of quantities for each product
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Initialize quantities state with product quantities
    const initialQuantities = productCtx.products.reduce((acc, product) => {
      acc[product.id] = 1; // Initialize each quantity to 1
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [productCtx.products]);

  const handleQuantityChange = (id, value, maxQty) => {
    const validValue = Math.max(1, Math.min(value, maxQty));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: validValue,
    }));
  };

  const addCartHandler = (item) => {
    const quantity = quantities[item.id] || 1; // Default to 1 if no quantity is specified
    cartCtx.addCart({ ...item, qty: quantity });
    productCtx.reduceProductQty(item.id, quantity);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: 1, // Reset input value to 1 after adding to cart
    }));
  };

  const products = productCtx.products.map((item) => (
    <tr key={item.id}>
      <td>{item.medicineName}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.qty}</td>
      <td>
        <input
          type="number"
          min="1"
          max={item.qty}
          value={item.qty === 0 ? 0 : quantities[item.id] || 1}
          onChange={(e) =>
            handleQuantityChange(item.id, +e.target.value, item.qty)
          }
          disabled={item.qty === 0}
        />
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
    <div className="product-list-container">
      {productCtx.products.length > 0 && (
        <div className="product-list">
          <table>
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
