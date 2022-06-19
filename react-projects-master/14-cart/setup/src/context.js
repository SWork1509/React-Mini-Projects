import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const INITIAL_STATE = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: { id } });
  }

  // const increaseAmount = (id) => {
  //   dispatch({ type: 'INCREASE_ITEM_COUNT', payload: { id } })
  // }

  // const decreaseAmount = (id) => {
  //   dispatch({ type: 'DECREASE_ITEM_COUNT', payload: { id } })
  // }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }


  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({
      type: 'DISPLAY_ITEMS', payload: cart
    });
  }

  useEffect(() => {
    fetchData();
  }, [])


  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        // increaseAmount,
        // decreaseAmount,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
