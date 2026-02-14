import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";
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
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Unit Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>

      <br /><br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

export default CartItem;
