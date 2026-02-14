import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing">
      {!showProductList ? (
        <>
          <h1>Welcome to Paradise Nursery</h1>
          <button
            className="get-started-btn"
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
