import React from "react";
import "./style.css";

const Filters = () => {
  return (
    <div>
      <div>
        <p className="text-xl my-3 font-bold font-sans  "> Filter Products</p>
        <div className=" flex flex-col   ">
          <label>
            <input type="radio" />
            Price Low to High
          </label>
          <label>
            <input type="radio" />
            Price High to Low
          </label>
          <label className="">
            <input type="checkbox" />
            Include Out of Stock
          </label>
          <label>
            <input type="checkbox" />
            Fast Delivery Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
