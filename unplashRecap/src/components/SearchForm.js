import React, {useRef} from 'react';
import {useGlobalContext} from './context';
import {FaSearch} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import Error from './Error';

const SearchForm = () => {
  const inputValue = useRef();
  const {setQuery} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.current.value === '') {
      return;
    }
    setQuery(inputValue.current.value);
    inputValue.current.value = '';
  };

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <h2>
          <a href="/">
            <AiOutlineHome />
          </a>
        </h2>
        <input
          type="text"
          className="form-input"
          ref={inputValue}
          placeholder="search movies"
        />
        <button className="submit-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
