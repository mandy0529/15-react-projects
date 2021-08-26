import React, {useState} from 'react';
import data from './data';
function App() {
  const [text, setText] = useState([]);
  const [page, setPage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let numberPage = Number(page);
    if (numberPage <= 0) {
      numberPage = 1;
    }
    if (numberPage > data.length) {
      numberPage = data.length + 1;
    }
    setText(data.slice(0, numberPage));
  };
  return (
    <section className="section-center">
      <h3>lorem ipsum project setup</h3>
      <form className="lerem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs :</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        ></input>
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lerem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
