import React, {useState, useContext, useReducer, useEffect} from 'react';
import {CAL, CLEAR, DEL, LOADING, MINUS, NUM, PLUS, SHOW} from './controlType';
import reducer, {initialState} from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({type: CLEAR});
  };

  const removeItem = (id) => {
    dispatch({type: DEL, payload: id});
  };

  const fetchItem = async () => {
    dispatch({type: LOADING});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: SHOW, payload: cart});
  };

  const plusMinusItem = (id, type) => {
    dispatch({type: NUM, payload: {id, type}});
  };

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    dispatch({type: CAL});
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        plusMinusItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
