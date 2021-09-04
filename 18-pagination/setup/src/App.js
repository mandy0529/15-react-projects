import React, {useState, useEffect} from 'react';
import {useFetch} from './useFetch';
import Follower from './Follower';

function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  console.log(data.length, 'data');
  console.log(page, 'page');
  const handleClick = (index) => {
    setPage(index);
  };

  useEffect(() => {
    setFollowers(data[page]);
  }, [loading, page]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? '...loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers" L>
        <div className="container">
          {followers &&
            followers.map((item) => <Follower key={item.id} {...item} />)}
        </div>
        {!loading && (
          <div className="btn-container">
            <button
              onClick={() => setPage(page === 0 ? data.length - 1 : page - 1)}
              className="prev-btn"
            >
              prev
            </button>
            {data.map((item, index) => {
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
              onClick={() => setPage(page < data.length - 1 ? page + 1 : 0)}
              className="next-btn"
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
