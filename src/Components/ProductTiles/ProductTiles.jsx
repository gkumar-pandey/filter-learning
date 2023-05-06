import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../../Context";
import { actions } from "../../Context/CartContext/CartContext";

const ProductTiles = (props) => {
  const { name, price, rating, id, image, qty } = props;
  const { dispatch } = useCart();
  return (
    <div className=" w-1/2 border border-gray-600 my-4   ">
      <div className="border flex     ">
        <div className="flex">
          <img className="w-1/2" src={image} alt={name} />
          <div className=" px-2">
            <p>{name}</p>
            <p>Rs.{price}</p>
          </div>
        </div>

        <div className="flex w-full justify-around items-center ">
          <div className="text-xl ">
            <button
              onClick={() =>
                dispatch({ type: actions.INC_CHANGE_CART_QTY, payload: id })
              }
              className=" bg-gray-700 text-white px-4 rounded "
            >
              +
            </button>
            <span className="mx-3">{qty}</span>
            <button
              disabled={qty === 1}
              onClick={() =>
                dispatch({ type: actions.DEC_CART_QTY, payload: id })
              }
              className=" bg-gray-700 text-white px-4 rounded disabled:opacity-[0.6] "
            >
              -
            </button>
          </div>
          <AiFillDelete
            onClick={() =>
              dispatch({ type: actions.REMOVE_FROM_CART, payload: id })
            }
            className="text-3xl cursor-pointer text-red-600 "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTiles;
