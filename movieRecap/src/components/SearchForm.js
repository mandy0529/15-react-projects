import React, {useRef} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useGlobalContext, useSearchContext} from './context';
import {AiOutlineHome} from 'react-icons/ai';
import Error from './Error';

const SearchForm = () => {
  const setQuery = useSearchContext();
  const {error} = useGlobalContext();
  const inputValue = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue.current.value);
    inputValue.current.value = '';
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>
        <a href="/">
          <AiOutlineHome />
        </a>
        <h2>minji movies</h2>
      </h2>
      <input
        type="text"
        className="form-input"
        ref={inputValue}
        placeholder="search movies"
      />
      <button className="search-btn">
        <FaSearch />
      </button>
      {error.show && <Error error={error} />}
    </form>
  );
};

export default SearchForm;
