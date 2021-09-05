import React, {useState, useEffect, useContext} from 'react';
import Page from './Page';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newData = await response.json();
      setData(Page(newData));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{loading, data}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
