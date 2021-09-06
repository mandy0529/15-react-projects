import React, {useState, useContext} from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = async () => {
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

export default useFetch;
