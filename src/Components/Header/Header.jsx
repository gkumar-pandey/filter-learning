import React from "react";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../../Context";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart }
  } = useCart();
  return (
    <div className="text-white bg-slate-800 font-sans flex items-center justify-around p-4 fixed w-full z-20 ">
      <div>
        <Link to="/">
          <h2 className=" font-bold text-xl ">Shopping</h2>
        </Link>
      </div>

      <input
        type="text"
        placeholder="search.."
        className=" rounded text-black py-1 px-2 w-1/5 font-sans text-sm focus:outline-none "
      />

      <div className=" cursor-pointer  relative  ">
        <Link to={"/cart"}>
          <BsCartFill className="text-4xl" />
          <div className="absolute right-[-5px] top-[-5px] px-2 text-md font-bold bg-green-500  rounded-3xl   ">
            {cart.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
