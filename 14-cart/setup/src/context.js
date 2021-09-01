import React, {useState, useContext, useReducer, useEffect} from 'react';
import {CLEAR, DEL, MINUS, PLUS} from './controlType';
import cartItems from './data';
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
  const plusItem = (id) => {
    dispatch({type: PLUS, payload: id});
  };

  const minusItem = (id) => {
    dispatch({type: MINUS, payload: id});
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        plusItem,
        minusItem,
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
