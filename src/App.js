import "./App.css";
import AddProducts from "./components/AddProducts";
import Cart from "./components/Cart";
import ProductLists from "./components/ProductLists";
import CartProvider from "./store/CartProvider";
import ProductProvider from "./store/ProductProvider";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <Cart />
          <AddProducts />
          <ProductLists />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
