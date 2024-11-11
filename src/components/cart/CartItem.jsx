/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={cartItem.id}
      className="space-y-4 border-t py-4 border-t-gray-400"
    >
      <div className="flex gap-2 flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-row gap-2  items-center">
          <img className="max-w-24" src={cartItem.url} />
          <p className="sm:max-w-40">{cartItem.name}</p>
        </div>

        <div className=" flex flex-col gap-2 ">
          <div className="flex flex-row gap-2">
            <p className="text-gray-700">price:${cartItem.price}</p>
            <p className="text-gray-700">quantity:{cartItem.quantity}</p>
          </div>

          <p className="text-gray-700">
            total price:${cartItem.quantity * cartItem.price}
          </p>
          <button
            className=" text-xs px-1 bg-red-700 hover:bg-red-500 text-white py-2 rounded-lg"
            onClick={() => {
              dispatch(removeFromCart({ id: cartItem.id }));
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
