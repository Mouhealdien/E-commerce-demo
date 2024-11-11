/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
const CartModal = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  let totalOrderPrice = 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg px-2 py-6 w-full max-w-2xl mx-1 text-black">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold ">Your Cart</h2>
          <button
            className=" text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className=" overflow-y-auto h-48 px-2">
              {cartItems.map((e) => {
                totalOrderPrice += e.price * e.quantity;
                return <CartItem key={e.id} cartItem={e} />;
              })}
            </div>
            <div className="mt-6 border-t border-t-gray-400">
              <div className="py-5 flex flex-row justify-between text-xl">
                <p>total Order Price: </p>
                <p>${totalOrderPrice}</p>
              </div>
              <button
                className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg"
                onClick={onClose}
              >
                buy
              </button>
            </div>
          </>
        ) : (
          <div className=" h-40 flex items-center text-xl justify-center">
            <p>no items yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
