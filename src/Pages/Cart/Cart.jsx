import React from "react";
import { useCart } from "../../Context";
import ProductTiles from "../../Components/ProductTiles/ProductTiles";
import CartProductsDetails from "../../Components/CartProductsDetails/CartProductsDetails";

const Cart = () => {
  const {
    state: { cart }
  } = useCart();
  return (
    <div className="pt-20 flex  ">
      <div className="w-2/3 p-4 flex flex-col items-center ">
        {cart.map((prod) => (
          <ProductTiles {...prod} key={prod.id} />
        ))}
      </div>
      <div>
        <CartProductsDetails />
      </div>
    </div>
  );
};

export default Cart;
