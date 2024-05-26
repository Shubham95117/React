import React from "react";
const ProductContext = React.createContext({
  products: [],
  addProduct: (item) => {},
  removeProduct: (id) => {},
});
export default ProductContext;
