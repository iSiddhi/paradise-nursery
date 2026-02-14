import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Unit Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button
            className="increase-btn"
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: 1 }))
            }
          >
            +
          </button>

          <button
            className="decrease-btn"
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: -1 }))
            }
          >
            -
          </button>

          <button
            className="delete-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{totalAmount}</h3>

      <button className="checkout-btn">
        Checkout (Coming Soon)
      </button>

      <br /><br />
      <Link to="/" className="continue-shopping-btn">
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartItem;
