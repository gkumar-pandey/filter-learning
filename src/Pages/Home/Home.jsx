import React from "react";
import { useCart } from "../../Context";
import { Filters, ProductCard } from "../../Components";

const Home = () => {
  const {
    state: { products },
    fitlerState: { inStock, isFastDelivery, searchQuery, sort }
  } = useCart();

  const filteredProducts = () => {
    let filteredProd = products;

    if (sort) {
      filteredProd = [...products].sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (inStock) {
      filteredProd = products.filter((prod) => !prod.inStock);
    }

    if (isFastDelivery) {
      filteredProd = filteredProd.filter((item) => item.fastDelivery);
    }

    if (searchQuery) {
      filteredProd = filteredProd.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProd;
  };
  return (
    <div className="flex pt-20">
      <div className="w-[20%] h-screen bg-slate-800 p-4 top-0 text-white ">
        <Filters />
      </div>
      <div className=" w-[80%] flex flex-wrap  justify-center ml-[200px]  ">
        {products.length > 0 ? (
          filteredProducts().map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        ) : (
          <div className="text-4xl font-sans font-bold">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
