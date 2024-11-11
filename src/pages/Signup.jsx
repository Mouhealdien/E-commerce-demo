import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/global/Input";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    console.log(user);
    if (user) {
      toast.error("The email is registered before", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      console.log(data);
      dispatch(addUser(data));
      toast.success("Succses", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/home");
    }

    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen bg-white lg:py-0">
      <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-primary  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary md:text-2xl ">
            Sign up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div className="w-full">
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      name: "email",
                      type: "email",
                      placeholder: "Your Email",
                    }}
                    label={"Email"}
                    labelStyle={"text-white"}
                  />
                )}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-500">This field required</p>
              )}
            </div>

            <div className="w-full">
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    inputProps={{
                      ...field,
                      name: "password",
                      type: "password",
                      placeholder: "••••••••",
                    }}
                    label={"password"}
                    labelStyle={"text-white"}
                  />
                )}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-red-500">This field required</p>
              )}
            </div>

            <div className="flex flex-col gap-5 justify-center items-center">
              <button
                type="submit"
                className=" w-[60%] sm:w-[40%]  text-primary bg-primary-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary  "
              >
                Sign up
              </button>
              <p className="text-secondary">
                Already have an account?{" "}
                <Link to={"/"} className="text-[#BDBFF9] inline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
