import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
const Question = ({title, info}) => {
  const [content, setContent] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setContent(!content)} className="btn">
          {content ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {content ? <p>{info}</p> : ''}
    </article>
  );
};

export default Question;
