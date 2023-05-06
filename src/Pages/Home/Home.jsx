import React from "react";
import { useCart } from "../../Context";
import { Filters, ProductCard } from "../../Components";

const Home = () => {
  const {
    state: { products }
  } = useCart();
  return (
    <div className="flex pt-20   ">
      <div className="w-[200px] h-screen bg-slate-800 p-4 text-white fixed ">
        <Filters />
      </div>
      <div className="flex flex-wrap  justify-center ml-[200px]   ">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
