import React, {useEffect} from 'react';
import {useGlobalStyle} from './context';
import {FaSearch} from 'react-icons/fa';
import Photo from './Photo';
import Loader from './Loader';

const Hero = () => {
  const {data, loading, value, setValue} = useGlobalStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('');
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={value}
            onChange={handleChange}
          />
          <button className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {data.map((item) => (
            <Photo key={item.id} {...item} />
          ))}
        </div>
        {loading && (
          <h2 className="loading">
            <Loader />
          </h2>
        )}
      </section>
    </main>
  );
};

export default Hero;
