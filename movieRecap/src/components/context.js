import React, {useState, useContext} from 'react';
import useFetchData from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('dog');
  const queryApi = `&s=${query}`;
  const {loading, data, error} = useFetchData(queryApi);

  return (
    <AppContext.Provider value={{loading, data, error, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const useSearchContext = () => {
  const {setQuery} = useContext(AppContext);
  return setQuery;
};
export default AppProvider;
