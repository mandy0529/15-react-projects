import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('name');
  const [value, setValue] = useState('');
  const [person, setPerson] = useState(null);

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const dataset = e.target.dataset.label;
      setName(dataset);
      setValue(person[dataset]);
    }
  };

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const {results} = await response.json();
    const {
      cell: phone,
      email,
      name: {first, last},
      dob: {age},
      location: {
        street: {name, number},
      },
      picture: {large: img},
      login: {password: lock},
    } = results[0];
    const newPerson = {
      phone,
      email,
      name: `${first} ${last}`,
      age,
      street: `${name} ${number}`,
      img,
      lock,
    };
    console.log(newPerson);
    setPerson(newPerson);
    setLoading(false);
    setName('name');
    setValue(newPerson.name);
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"> </div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.img) || defaultImage}
            alt="random person avatar"
          />
          <p className="user-titie"> my {name} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="lock"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? '...loading' : 'random person'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
