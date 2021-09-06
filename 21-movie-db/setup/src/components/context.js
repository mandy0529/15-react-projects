import React, {useState, useContext} from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('batman');
  const queryApi = `&s=${query}`;
  const {loading, movies, error} = useFetch(queryApi);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
