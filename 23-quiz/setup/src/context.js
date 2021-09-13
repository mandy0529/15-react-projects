import React, {useState, useEffect, useContext, useReducer} from 'react';
import reducer, {intialState} from './reducer';
import axios from 'axios';
import {ERROR, LOADING, QUESTIONS, WAITING} from './action';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const url = '';
const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21difficulty=easy&type=multiple';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const fetchItem = async () => {
    dispatch({type: LOADING});
    try {
      const {
        data: {results},
      } = await axios(tempUrl);
      if (results.length > 0) {
        dispatch({type: QUESTIONS, payload: results});
      } else {
        dispatch({WAITING});
        dispatch({type: ERROR});
      }
    } catch {
      throw new Error();
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
