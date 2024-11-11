// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../cart/CartModal";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <h1>E-Commerce</h1>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className="relative  bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          <Link to={"/"}> Logout</Link>
        </button>

        <button
          className="relative flex flex-row gap-2 justify-center items-center  bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          onClick={handleCartClick}
        >
          <FaCartArrowDown /> Cart
        </button>
      </div>

      {isCartOpen && <CartModal onClose={handleCloseCart} />}
    </nav>
  );
};

export default Navbar;
