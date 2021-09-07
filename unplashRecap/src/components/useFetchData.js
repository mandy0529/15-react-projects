import React, {useEffect, useState} from 'react';

export const BASE_API = `https://api.unsplash.com/`;

const useFetchData = (url, optionUrl) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const pageUrl = `&page=${page}`;

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}${url}${pageUrl}${optionUrl}`);
      const {results} = await response.json();
      if (results) {
        setData(results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(`${BASE_API}${url}${pageUrl}${optionUrl}`);
    // eslint-disable-next-line
  }, [url, optionUrl]);

  return {loading, data};
};

export default useFetchData;
