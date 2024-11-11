import DashboardTableWrapper from "../components/dashboard/DashboardTableWrapper";
import DashboradTable from "../components/dashboard/DashboradTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
const Products = () => {
  const allProducts = useSelector((state) => state.products.items);
  const headres = ["img", "name", "price", "description"];
  const navigate = useNavigate();
  return (
    <>
      <SideBar />
      <DashboardTableWrapper>
        <div className="flex flex-row justify-between border-b border-b-gray-400 py-5 mb-5">
          <h1 className=" text-4xl">Products</h1>
          <div className=" flex flex-col gap-2">
            <button
              className="  px-2 bg-primary hover:bg-blue-800 transition duration-300 text-white py-2 rounded-lg"
              onClick={() => {
                navigate("/products/add-product");
              }}
            >
              Add Product
            </button>
          </div>
        </div>
        <DashboradTable headers={headres} data={allProducts} />
      </DashboardTableWrapper>
    </>
  );
};

export default Products;
