import React, {useState} from 'react';
import data from './data';
import Question from './Question';
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <secion className="info">
          {question.map((data) => (
            <Question key={data.id} {...data} />
          ))}
        </secion>
      </div>
    </main>
  );
}

export default App;
