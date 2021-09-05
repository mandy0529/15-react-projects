import React, {useContext, useEffect, useState} from 'react';

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');

  const client_id = process.env.REACT_APP_ACCESS_KEY;
  const secret_id = process.env.REACT_APP_SECRET_KEY;
  const pageUrl = `&page=${page}`;
  const queryUrl = `&query=${value}`;

  const getData = async () => {
    setLoading(true);
    let url;

    if (value) {
      console.log('1');
      url = `${searchUrl}?client_id=${client_id}${queryUrl}`;
    } else {
      console.log('2');
      url = `${mainUrl}?client_id=${client_id}${pageUrl}`;
    }

    try {
      const response = await fetch(url);
      const pic = await response.json();
      console.log(pic, 'pic');
      //   setData((current) => {
      //     return [...current, ...pic];
      //   });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [value, page]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowScrollHeight = window.scrollY;
      const bodyHeight = document.body.scrollHeight;

      if (!loading && windowHeight + windowScrollHeight >= bodyHeight - 2) {
        setPage((current) => {
          return current + 1;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContext.Provider value={{loading, data, setValue, value}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalStyle = () => {
  return useContext(AppContext);
};

export default AppProvider;
