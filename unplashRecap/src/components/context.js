import React, {useContext, useEffect, useState} from 'react';
import useFetchData from './useFetchData';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('dog');

  const queryUrl = `&query=${query}`;
  const client_id = process.env.REACT_APP_ACCESS_KEY;
  const mainUrl = `photos/?client_id=${client_id}`;
  const searchUrl = `search/photos/?client_id=${client_id}`;

  const {loading, data} = useFetchData(searchUrl, queryUrl);

  return (
    <AppContext.Provider value={{loading, data, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
