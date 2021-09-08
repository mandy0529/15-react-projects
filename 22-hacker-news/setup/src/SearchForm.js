import React, {useRef} from 'react';
import {useGlobalContext} from './context';

const SearchForm = () => {
  const {handleSearch} = useGlobalContext();
  const inputValue = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue.current.value);
    inputValue.current.value = '';
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input className="form-input" type="text" ref={inputValue}></input>
    </form>
  );
};

export default SearchForm;
