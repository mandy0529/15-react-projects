import React, {useState, useContext, useEffect} from 'react';
import {useCallback} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('all');
  const [cocktails, setCocktails] = useState([]);

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      console.log(data);
      setCocktails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCocktail();
  }, [search]);

  return (
    <AppContext.Provider value={{loading, search, setSearch, cocktails}}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
