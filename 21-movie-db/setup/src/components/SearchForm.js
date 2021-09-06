import React, {useRef} from 'react';
import {useGlobalContext} from './context';
import Error from './Error';

const SearchForm = () => {
  const {error, setQuery} = useGlobalContext();
  const searchValue = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchValue.current.value);
    searchValue.current.value = '';
  };

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
