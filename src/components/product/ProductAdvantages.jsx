import { FaTruck, FaMoneyBill } from "react-icons/fa";
const ProductAdvantages = () => {
  return (
    <ul className="mt-2 flex items-center gap-4">
      <li className="flex items-center gap-2">
        <FaTruck color="#6b7280" />
        <p className=" text-[10px] sm:text-sm font-medium text-gray-500 dark:text-gray-400">
          Fast Delivery
        </p>
      </li>

      <li className="flex items-center gap-2">
        <FaMoneyBill color="#6b7280" />
        <p className="text-[10px] sm:text-sm font-medium text-gray-500 dark:text-gray-400">
          Best Price
        </p>
      </li>
    </ul>
  );
};

export default ProductAdvantages;
