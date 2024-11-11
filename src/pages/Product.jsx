import Navbar from "../components/global/Navbar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductAdvantages from "../components/product/ProductAdvantages";
import QuantityInput from "../components/product/QuantityInput";
import { FaCartPlus } from "react-icons/fa";
import { getProductById } from "../redux/slices/productsSlice";

const Product = () => {
  const { productId } = useParams();

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

  const product = useSelector((state) => getProductById(state, productId));

  return (
    <div>
      <Navbar />
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row gap-5 ">
        <div className="w-full">
          <img className="mx-auto w-96  " src={product.url} alt="" />
        </div>
        <div>
          <p className=" text-lg font-semibold leading-tight text-gray-900 hover:underline ">
            {product.description}
          </p>

          <ProductAdvantages />

          <div className="mt-4 w-full flex flex-col items-start justify-between gap-4">
            <p className=" text-lg sm:text-2xl font-extrabold leading-tight text-gray-900 ">
              ${product.price}
            </p>
            <div className="flex flex-col gap-5 sm:flex-row w-full justify-between  ">
              <QuantityInput onChangeQuantity={handelQuantity} />
              <button
                type="button"
                className="inline-flex items-center w-full justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-secondary hover:-translate-y-1 transition duration-300 "
                onClick={handleAddToCart}
              >
                <FaCartPlus />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
