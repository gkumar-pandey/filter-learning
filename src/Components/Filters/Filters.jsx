import React from "react";
import "./style.css";
import { useCart } from "../../Context";
import { actions, filterActions } from "../../Context/CartContext/CartContext";

const Filters = () => {
  const {
    filterDispatch,
    fitlerState: { sort, inStock, isFastDelivery }
  } = useCart();

  return (
    <div className=" p-2 ">
      <div>
        <p className="text-3xl my-3 font-bold font-sans  "> Filter Products</p>
        <div className=" flex flex-col   ">
          <label>
            <input
              type="radio"
              name="price"
              checked={sort === "lowToHigh" ? true : false}
              value={"lowtohigh"}
              onChange={() =>
                filterDispatch({
                  type: filterActions.SORT_BY_PRICE,
                  payload: "lowToHigh"
                })
              }
            />
            Price Low to High
          </label>
          <label>
            <input
              type="radio"
              value={"hightolow"}
              name="price"
              checked={sort === "highToLow" ? true : false}
              onChange={() =>
                filterDispatch({
                  type: filterActions.SORT_BY_PRICE,
                  payload: "highToLow"
                })
              }
            />
            Price High to Low
          </label>
          <label className="">
            <input
              type="checkbox"
              checked={inStock}
              onChange={() =>
                filterDispatch({ type: filterActions.FILTER_BY_STOCK })
              }
            />
            Include Out of Stock
          </label>
          <label>
            <input
              type="checkbox"
              checked={isFastDelivery}
              onChange={() =>
                filterDispatch({ type: filterActions.FILTER_BY_DELIVERY })
              }
            />
            Fast Delivery Only
          </label>
        </div>
        <button
          onClick={() => filterDispatch({ type: filterActions.RESET })}
          className="bg-white text-gray-800 font-semibold font-sans py-2 px-3 text-md rounded my-2 cursor-pointer "
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
