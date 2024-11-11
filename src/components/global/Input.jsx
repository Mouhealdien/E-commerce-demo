/* eslint-disable react/prop-types */

const Input = ({ inputProps, label, labelStyle }) => {
  return (
    <div className="w-full">
      <label
        className={`block mb-2 text-sm font-medium ${
          labelStyle ? labelStyle : "text-black"
        }  `}
      >
        {label}
      </label>
      <input
        {...inputProps}
        className="bg-gray-50 border   border-gray-300 text-black rounded-lg focus:outline-primary  focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400  "
      />
    </div>
  );
};

export default Input;
