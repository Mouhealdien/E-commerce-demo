import { useSelector } from "react-redux";
import Navbar from "../components/global/Navbar";
import Input from "../components/global/Input";
import { useState, useMemo } from "react";
import Container from "../components/global/Container";
import ProductCard from "../components/product/ProductCard";

const Home = () => {
  const allProducts = useSelector((state) => state.products.items);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (product) =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allProducts, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <Input
            inputProps={{
              type: "text",
              placeholder: "Search",
              onChange: handleSearch,
            }}
          />
        </div>

        <div className="my-4 grid gap-4 grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
