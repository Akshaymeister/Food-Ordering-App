import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4  p-4 ">
      <div className="w-9/12 items-center  m-auto p-4 flex justify-between border-b-2">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {!cartItems.length && (
          <h1 className="my-40 text-3xl font-semibold">Cart is empty!!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
