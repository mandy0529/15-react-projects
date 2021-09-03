import React, {useState, useContext, useEffect} from 'react';
import {useCallback} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const getCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const {drinks} = await response.json();
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink: id,
            strAlcoholic: info,
            strCategory: type,
            strDrink: name,
            strDrinkThumb: img,
          } = item;
          return {
            id,
            info,
            type,
            name,
            img,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log('getdata', 'get data!');
  }, [search]);

  useEffect(() => {
    getCocktail();
  }, [search, getCocktail]);

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
