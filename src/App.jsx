import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function App(){
  return (
    <div className="app" >
      <ThemeToggle />
      <main className="page-shell">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" 
          element={
            <main className="not-found">
              <h1>404</h1>
              <p>Page not found.</p>
              <button type="button" onClick={() => window.location.href = "/"}>
                Go Home
              </button>
            </main>
          }/>
        </Routes>
      </main>
    </div>
  );
}
export default App;