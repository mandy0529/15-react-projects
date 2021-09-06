import React from 'react';
import {useGlobalStyle} from './context';
import {FaSearch} from 'react-icons/fa';
import Photo from './Photo';
import Loader from './Loader';

const Hero = () => {
  const {data, loading, value, setValue, setPage, getData} = useGlobalStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    getData();
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
          {data.map((item, index) => (
            <Photo key={item.id} {...item} />
          ))}
        </div>
        {loading && (
          <div className="loading">
            <Loader />
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
