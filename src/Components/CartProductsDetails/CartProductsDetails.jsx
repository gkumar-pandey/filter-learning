import React from "react";
import { useCart } from "../../Context";

const CartProductsDetails = () => {
  const {
    state: { cart }
  } = useCart();

  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className=" bg-slate-700 text-white p-4  ">
      <div>
        <div>
          <p className="text-xl">Total Items : {totalItems}</p>
          <p>Sub Items : {cart.length}</p>
        </div>
        <p className="text-xl font-sans font-bold ">
          Total Price: Rs. {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default CartProductsDetails;
