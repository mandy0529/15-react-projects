import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {
  const [person, setPerson] = useState(data);
  const [page, setPage] = useState(0);
  return (
    <>
      <section className="section">
        <div class="container">
          <h1 className="title">review</h1>
        </div>
        <div class="section-center">
          {person.map((each) => {
            const {id, image, name, title, quote} = each;
            return <img class="person-img" src={image} alt={name} />;
          })}
        </div>
      </section>
      )
    </>
  );
}

export default App;
