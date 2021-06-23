import React, { createContext, useReducer, useEffect } from "react";
import { Products } from "./products";
import Contextcart from "./Contextcart.js";
import { reducer } from "./Reducer";
export const CartContext = createContext();

const items_state = JSON.parse(localStorage.getItem("items"));
// console.log(items_state)
if (items_state === null) {
  var initialState = {
    item: Products,
    totalAmount: 0,
    totalItem: 0,
  };
} else {
  var initialState1 = items_state;
}
initialState = initialState1;
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const Remove_Item = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);
  useEffect(() => {
    dispatch({ type: "GET_TOTAL_AMOUNT" });
  }, [state.item]);
  const Clear_ALL_Item = (id) => {
    return dispatch({
      type: "Clear_ALL_Item",
    });
  };
  const Increase_Quantity = (id) => {
    return dispatch({
      type: "Increase",
      payload: id,
    });
  };

  const Decrease_Quantity = (id) => {
    return dispatch({
      type: "Decrease",
      payload: id,
    });
  };
  return (
    <>
      <CartContext.Provider
        value={{
          ...state,
          Remove_Item,
          Clear_ALL_Item,
          Increase_Quantity,
          Decrease_Quantity,
        }}
      >
        <Contextcart />
      </CartContext.Provider>

      <footer>Copyright &copy; Harshit Raj {new Date().getFullYear()}</footer>
    </>
  );
};

export default Cart;
