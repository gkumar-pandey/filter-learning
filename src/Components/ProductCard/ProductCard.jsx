import React from "react";
import { useCart } from "../../Context";
import { actions } from "../../Context/CartContext/CartContext";

const ProductCard = (props) => {
  const { id, name, price, image, rating, inStock, fastDelivery } = props;
  const {
    state: { cart },
    dispatch
  } = useCart();
  return (
    <div className="w-1/5 h-fit m-4 rounded  border border-gray-400 ">
      <div>
        <div>
          <img src={image} alt={name} />
        </div>
        <div className="p-2">
          <p>{name}</p>
          <p>Price : {price}</p>
          {fastDelivery ? <p>Fast Delivery</p> : <p>4 days delivery</p>}
          {cart.some((prod) => id === prod.id) ? (
            <button
              onClick={() =>
                dispatch({ type: actions.REMOVE_FROM_CART, payload: id })
              }
              className="rounded bg-red-700 text-white px-2 py-1 cursor-pointer "
            >
              Remove From Cart
            </button>
          ) : (
            <>
              {inStock ? (
                <button
                  onClick={() =>
                    dispatch({ type: actions.ADD_TO_CART, payload: props })
                  }
                  className="rounded bg-slate-700 text-white py-1 px-2 "
                >
                  Add to cart
                </button>
              ) : (
                <button
                  disabled={!inStock}
                  className="rounded bg-slate-700 text-white py-1 px-2 disabled:opacity-[0.6] cursor-pointer
               "
                >
                  Out of stock
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
