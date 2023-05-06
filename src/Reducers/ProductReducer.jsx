import { actions } from "../Context/CartContext/CartContext";
const productReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCTS:
      return { ...state, products: action.payload };
    case actions.ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default productReducer;
