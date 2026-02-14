import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 250, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Aloe Vera", price: 150, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Spider Plant", price: 180, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Rubber Plant", price: 300, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Money Plant", price: 120, image: "https://via.placeholder.com/150" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 100, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Tulip", price: 130, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Hibiscus", price: 150, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Sunflower", price: 90, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Marigold", price: 80, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Jasmine", price: 140, image: "https://via.placeholder.com/150" }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 220, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Echeveria", price: 260, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Jade Plant", price: 210, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Haworthia", price: 240, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Sedum", price: 190, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Agave", price: 300, image: "https://via.placeholder.com/150" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <Navbar />
      <h2>Our Plants</h2>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>

          {items.map(plant => {
            const isAdded = cartItems.find(
              item => item.id === plant.id
            );

            return (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>₹{plant.price}</p>

                <button
                  className="add-to-cart-btn"
                  disabled={isAdded}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isAdded ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
