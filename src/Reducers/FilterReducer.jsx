import { filterActions } from "../Context/CartContext/CartContext";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case filterActions.SORT_BY_PRICE:
      return { ...state, sort: action.payload };
    case filterActions.FILTER_BY_STOCK:
      return { ...state, inStock: !state.inStock };
    case filterActions.FILTER_BY_DELIVERY:
      return { ...state, isFastDelivery: !state.isFastDelivery };
    case filterActions.FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload };
    case filterActions.RESET:
      return {
        searchQuery: "",
        inStock: false,
        isFastDelivery: false
      };
    default:
      return state;
  }
};
