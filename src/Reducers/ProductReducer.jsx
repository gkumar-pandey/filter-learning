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
    case actions.INC_CHANGE_CART_QTY:
      return {
        ...state,
        cart: state.cart.reduce(
          (acc, curr) =>
            curr.id === action.payload
              ? [...acc, { ...curr, qty: curr.qty + 1 }]
              : [...acc, curr],
          []
        )
      };
    case actions.DEC_CART_QTY:
      return {
        ...state,
        cart: state.cart.reduce(
          (acc, curr) =>
            curr.id === action.payload
              ? [...acc, { ...curr, qty: curr.qty - 1 }]
              : [...acc, curr],
          []
        )
      };

    default:
      return state;
  }
};

export default productReducer;
