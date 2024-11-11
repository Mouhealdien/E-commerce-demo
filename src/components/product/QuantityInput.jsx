/* eslint-disable react/prop-types */
import { useState } from "react";

const QuantityInput = ({ onChangeQuantity }) => {
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 10) {
      setValue(newValue);
      onChangeQuantity(newValue);
    }
  };

  const increment = () => {
    if (value < 10) {
      const newValue = value + 1;
      setValue(newValue);
      onChangeQuantity(newValue);
    }
  };

  const decrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onChangeQuantity(newValue);
    }
  };
  return (
    <div className="flex flex-row  items-stretch">
      <button
        onClick={increment}
        className="bg-primary text-white rounded-l-lg px-1 flex justify-center items-center"
      >
        +
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="1"
        max="10"
        placeholder="Enter a number between 0 and 10"
        className="border-primary border  text-center w-7"
      />
      <button
        onClick={decrement}
        className="bg-primary text-white px-1 rounded-r-lg flex justify-center items-center"
      >
        -
      </button>
    </div>
  );
};

export default QuantityInput;
