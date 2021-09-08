import React, {useContext, useEffect, useState} from 'react';
import useFetchData from './useFetchData';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('무야호');

  const queryUrl = `&query=${query}`;
  const client_id = process.env.REACT_APP_ACCESS_KEY;
  const mainUrl = `photos/?client_id=${client_id}`;
  const searchUrl = `search/photos/?client_id=${client_id}`;

  const {loading, data, setPage, getData} = useFetchData(mainUrl, '');
  const {loading: searchLoading, data: searchData} = useFetchData(
    searchUrl,
    queryUrl
  );
  console.log('data:', data, 'searchdata:', searchData, '컨텍스트 데이터');

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        setQuery,
        query,
        searchUrl,
        queryUrl,
        searchLoading,
        searchData,
        setPage,
        getData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
