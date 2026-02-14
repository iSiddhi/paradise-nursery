import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="landing">
            <h1>Paradise Nursery</h1>
            <button onClick={() => window.location.href="/plants"}>
              Get Started
            </button>
          </div>
        } />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
