import React, { useState } from "react";
import ProductContext from "./products_context";
const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  // const reduceHandler=(item)=>{
  //   const updatedProduct=products.filter((product)=>{
  //     item.qty=
  //   })
  // }
  const addProductsHandler = (newProduct) => {
    setProducts((prevProducts) => {
      const existingProductIndex = prevProducts.findIndex(
        (product) => product.medicineName === newProduct.medicineName
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex].qty += parseInt(
          newProduct.qty,
          10
        );
        return updatedProducts;
      } else {
        return [
          ...prevProducts,
          {
            ...newProduct,
            qty: parseInt(newProduct.qty, 10), // Ensure qty is stored as integer
          },
        ];
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
    // reduceProductQty:reduceHandler;
  };

  return (
    <ProductContext.Provider value={productsContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
