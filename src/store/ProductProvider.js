import React, { useState } from "react";
import ProductContext from "./products_context";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const reduceProductQtyHandler = (id) => {
    setProducts((prevProducts) => {
      const updatedItems = prevProducts.map((item) => {
        if (item.id === id && item.qty > 0) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
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
