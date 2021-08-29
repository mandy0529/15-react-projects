import React, {useState} from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#123123').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    try {
      let colors = new Values(`#${color}`).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setColor('');
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#123123"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section class="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} hex={color.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
