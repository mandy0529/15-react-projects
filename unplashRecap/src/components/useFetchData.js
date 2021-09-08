import React, {useEffect, useState} from 'react';
import {useGlobalContext} from './context';

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
      const data = await response.json();
      // setData((current) => {
      //   if (query) {
      //     return [...current, ...data.results];
      //   } else {
      //     return [...current, ...data];
      //   }
      // });
      setData(data.results || data);
      console.log(data, 'data');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(`${BASE_API}${url}${pageUrl}${optionUrl}`);
    // eslint-disable-next-line
  }, [url, optionUrl, page]);

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
    // eslint-disable-next-line
  }, []);

  return {loading, data, setPage, getData};
};

export default useFetchData;
