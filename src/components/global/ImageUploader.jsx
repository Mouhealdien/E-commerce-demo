import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ImageUploader = ({ onChange, defaultValue }) => {
  const [image, setImage] = useState(defaultValue || "");

  useEffect(() => {
    setImage(defaultValue || "");
  }, [defaultValue]);

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files?.[0]);

    const response = await fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      headers: {
        Authorization: "Client-ID ef319d22a138893",
      },
      body: formData,
    });

    const data = await response.json();
    setImage(data.data.link);
    onChange(data.data.link);
  };
  const handleRemoveImage = () => {
    setImage("");
  };

  return (
    <div className="flex flex-col my-4 items-center">
      {image ? (
        <div className="w-full">
          <div
            className="w-full h-64 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          >
            <button
              onClick={handleRemoveImage}
              className="relative top-44 m-2  rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-secondary"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${defaultValue})` }}
          className="w-full bg-cover bg-center bg-no-repeat h-64 border-2 border-dashed hover:bg-gray-200 border-gray-300 flex justify-center items-center"
        >
          <label htmlFor="imageUpload" className="cursor-pointer text-gray-400">
            Click to upload an image
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleImageUpload}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
