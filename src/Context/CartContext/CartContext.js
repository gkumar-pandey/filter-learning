import { fakeFetch } from "../../Data/api";
import { filterReducer } from "../../Reducers/FilterReducer";
import productReducer from "../../Reducers/ProductReducer";

const { createContext, useContext, useEffect, useReducer } = require("react");

const CartContext = createContext();

export const actions = {
  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INC_CHANGE_CART_QTY: "INC_CHANGE_CART_QTY",
  DEC_CART_QTY: "DEC_CART_QTY"
};

export const filterActions = {
  SORT_BY_PRICE: "SORT_BY_PRICE",
  FILTER_BY_STOCK: "FILTER_BY_STOCK",
  FILTER_BY_DELIVERY: "FILTER_BY_DELIVERY",
  FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
  RESET: "RESET"
};

export const CartContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    cart: []
  };
  const filterInitalState = {
    searchQuery: "",
    inStock: false,
    isFastDelivery: false
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [fitlerState, filterDispatch] = useReducer(
    filterReducer,
    filterInitalState
  );
  const getProducts = async () => {
    const url = "https://example.com/api/products";
    try {
      const res = await fakeFetch(url);
      dispatch({ type: actions.ADD_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterDispatch, fitlerState }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
