import React, { useState } from "react";
import "./App.css";
import AddProducts from "./components/AddProducts";
import Cart from "./components/Cart";
import ProductLists from "./components/ProductLists";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import Header from "./Layout/Header";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          {cartShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <div className="content">
            <AddProducts />
            <ProductLists />
          </div>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
