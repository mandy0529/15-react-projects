import React, {useState, useEffect, useContext} from 'react';
import pagination from './Page';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const personData = await response.json();
      setPerson(pagination(personData));
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{loading, person}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
