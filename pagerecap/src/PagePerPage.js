import React from 'react';
import {useEffect, useState} from 'react';
import {useGlobalContext} from './context';
import Home from './Home';
import Loader from './Loader';

const PagePerPage = () => {
  const {person, loading} = useGlobalContext();
  const [page, setPage] = useState(0);
  const [persons, setPersons] = useState([]);
  console.log(page, '페이지');
  console.log(persons.length, '렝스');

  const handleClick = (index) => {
    setPage(index);
  };

  useEffect(() => {
    setPersons(person[page]);
  }, [page]);

  return (
    <section>
      <h3>
        {loading ? (
          <Loader />
        ) : (
          persons &&
          persons.map((item) => {
            return <Home key={item.id} {...item} />;
          })
        )}
      </h3>
      {!loading && (
        <div className="btn-container">
          <button
            onClick={() => setPage(page === 0 ? persons.length - 1 : page - 1)}
          >
            prev
          </button>
          {persons &&
            persons.map((item, index) => {
              return (
                <button
                  onClick={() => handleClick(index)}
                  key={index}
                  className={`page-btn ${
                    index === page ? 'active-btn' : 'page-btn'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          <button
            onClick={() => setPage(page === persons.length - 1 ? 0 : page + 1)}
          >
            next
          </button>
        </div>
      )}
    </section>
  );
};

export default PagePerPage;
