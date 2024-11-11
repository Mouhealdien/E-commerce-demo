import { Controller, useForm } from "react-hook-form";
import Input from "../global/Input";
import ImageUploader from "../global/ImageUploader";
import TextArea from "../global/TextArea";
import { addProduct } from "../../redux/slices/productsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const AddProductForm = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      url: "",
    },
  });
  const onSubmit = async (data) => {
    dispatch(addProduct({ url: data.url, ...data }));
    toast.success("Succses", {
      position: "top-right",
      autoClose: 3000,
    });
    reset();
  };
  return (
    <div>
      <form
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="px-4  text-fourth text-2xl pt-2">Product Details</h2>
          <div className="flex   py-4 gap-5 flex-row w-full">
            <div className="w-full">
              <Controller
                name="name"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,

                      type: "text",
                      placeholder: "Product name",
                    }}
                    label={"Product name"}
                  />
                )}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="text-red-500">This field required</p>
              )}
            </div>
            <div className="w-full">
              <Controller
                name="price"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      type: "number",
                      placeholder: "Product price",
                      min: 1,
                    }}
                    label={"Product price"}
                  />
                )}
              />
              {errors.price && errors.price.type === "required" && (
                <p className="text-red-500">This field required</p>
              )}
            </div>
          </div>
          <div className="w-full">
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextArea
                  textAreaProps={{
                    ...field,
                    placeholder: "Product description",
                  }}
                  label={"Product description"}
                />
              )}
            />
            {errors.description && errors.description.type === "required" && (
              <p className="text-red-500">This field required</p>
            )}
          </div>
          <div className="w-full">
            <Controller
              control={control}
              rules={{ required: true }}
              name="url"
              render={({ field: { onChange, value } }) => (
                <ImageUploader defaultValue={value} onChange={onChange} />
              )}
            />
            {errors.url && errors.url.type === "required" && (
              <p className="text-red-500">This field required</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 mx-2 my-2 hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
