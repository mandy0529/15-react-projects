import {useState, useEffect} from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({show: false, msg: ''});
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${url}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search || data);
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

  useEffect(() => {
    getMovies(`${API_ENDPOINT}${url}`);
    // eslint-disable-next-line
  }, [url]);

  return {loading, error, movies};
};

export default useFetch;
