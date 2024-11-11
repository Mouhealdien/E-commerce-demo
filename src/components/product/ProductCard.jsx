/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import QuantityInput from "./QuantityInput";
import ProductAdvantages from "./ProductAdvantages";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: quantity }));
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const handelQuantity = (value) => {
    setQuantity(value);
  };

  return (
    <div className="rounded-lg border flex flex-col border-gray-200 bg-white p-2 sm:p-6 shadow-sm ">
      <Link to={`/home/${product.id}`}>
        <div className="w-full">
          <img className="mx-auto  " src={product.url} alt="" />
        </div>
        <p className=" text-sm md:text-lg font-semibold leading-tight text-gray-900 hover:underline ">
          {product.description.length > 60
            ? `${product.description.substring(0, 60)}...`
            : product.description}
        </p>
      </Link>
      <ProductAdvantages />

      <div className="mt-4 w-full flex flex-col items-start justify-between gap-4">
        <div className="flex flex-row w-full justify-between  ">
          <p className=" text-lg sm:text-2xl font-extrabold leading-tight text-gray-900 ">
            ${product.price}
          </p>
          <QuantityInput onChangeQuantity={handelQuantity} />
        </div>
        <button
          type="button"
          className="inline-flex items-center w-full justify-center gap-1 sm:gap-2 rounded-lg bg-primary px-1 py-2.5 text-xs sm:text-sm  text-secondary hover:-translate-y-1 transition duration-300 "
          onClick={handleAddToCart}
        >
          <FaCartPlus />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
