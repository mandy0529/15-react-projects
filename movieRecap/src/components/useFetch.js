import {useState, useEffect} from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState({show: false, msg: ''});

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${url}`);
      const movies = await response.json();
      console.log(movies, '무비스');
      if (movies.Response === 'True') {
        setData(movies.Search || movies);
        setError({show: false, msg: ''});
      } else {
        setError({show: true, msg: movies.Error});
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(`${API_ENDPOINT}${url}`);
  }, [url]);

  return {loading, data, error};
};

export default useFetchData;
