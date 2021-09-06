import React, {useEffect, useRef, useState} from 'react';
import {useGlobalContext} from './context';
import Error from './Error';

const SearchForm = () => {
  const {error, getMovie} = useGlobalContext();
  const [query, setQuery] = useState('batman');
  const searchValue = useRef('');
  const queryApi = `&s=${query}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchValue.current.value);
    searchValue.current.value = '';
  };

  useEffect(() => {
    getMovie(queryApi);
  }, [query]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        ref={searchValue}
        placeholder="search movies"
      />
      {error.show && <Error error={error} />}
    </form>
  );
};

export default SearchForm;
