import React, { useState } from "react";
import ProductContext from "./products_context";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const reduceProductQtyHandler = (id, qty) => {
    setProducts((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      if (existingItemIndex === -1) return prevItems;

      const updatedItems = [...prevItems];
      if (updatedItems[existingItemIndex].qty > 0) {
        if (qty === 1) {
          updatedItems[existingItemIndex].qty -= 1;
        } else {
          updatedItems[existingItemIndex].qty -= qty;
        }
      }
      return updatedItems;
    });
  };

  const addProductsHandler = (newProduct) => {
    setProducts((prevProducts) => {
      const existingProductIndex = prevProducts.findIndex(
        (product) =>
          product.medicineName.trim() === newProduct.medicineName.trim()
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex].qty += newProduct.qty;
        return updatedProducts;
      } else {
        return [...prevProducts, newProduct];
      }
    });
  };

  const removeProductHandler = (id) => {
    const updatedItems = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(updatedItems);
  };
  const productsContext = {
    products: products,
    addProduct: addProductsHandler,
    removeProduct: removeProductHandler,
    reduceProductQty: reduceProductQtyHandler,
  };

  return (
    <ProductContext.Provider value={productsContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
