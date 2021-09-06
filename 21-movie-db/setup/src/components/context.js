import React, {useState, useContext} from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({show: false, msg: ''});
  const [movies, setMovies] = useState([]);

  const getMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${url}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data);
        setError({show: false, msg: ''});
      } else {
        setError({show: true, msg: data.Error});
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        getMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};

// const getMovies = async () => {
//   setLoading(true);
//   try {
//     const response = await fetch(`${API_ENDPOINT}${queryApi}`);
//     const data = await response.json();
//     if (data.Response === 'True') {
//       setMovies(data.Search);
//       setError({show: false, msg: ''});
//     } else {
//       setError({show: true, msg: data.Error});
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };
