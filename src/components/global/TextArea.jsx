// eslint-disable-next-line react/prop-types
const TextArea = ({ textAreaProps, label, labelStyle }) => {
  return (
    <div className="w-full">
      <label
        className={`block mb-2 text-sm font-medium ${
          labelStyle ? labelStyle : "text-black"
        }  `}
      >
        {label}
      </label>
      <textarea
        {...textAreaProps}
        className="bg-gray-50 border resize-y   border-gray-300 text-black rounded-lg focus:outline-primary focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400  "
      />
    </div>
  );
};

export default TextArea;
