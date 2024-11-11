import AddProductForm from "../components/forms/AddProductForm";
import SideBar from "../components/dashboard/SideBar";
const AddProduct = () => {
  return (
    <>
      <SideBar />
      <div className="md:ml-60 md:mr-5">
        <AddProductForm />
      </div>
    </>
  );
};

export default AddProduct;
