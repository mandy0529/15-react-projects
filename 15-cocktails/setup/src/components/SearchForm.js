import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from '../context';

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const searchValue = useRef('');

  // const handleChange = () => {
  //   setSearch(searchValue.current.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value);
    searchValue.current.value = '';
  };
  useEffect(() => {
    searchValue.current.focus();
  });

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favo cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            // onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
