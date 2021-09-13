import React from 'react';
import {useGlobalContext} from './context';
import Modal from './Modal';

const Quiz = ({difficulty, incorrect_answers, question, correct_answer}) => {
  const {index, score} = useGlobalContext();
  let answers;
  if (incorrect_answers) {
    answers = [...incorrect_answers, correct_answer];
    console.log(answers, '앤숼');
  }

  return (
    <main>
      <Modal />
      <h1>quiz</h1>
      <section className="quiz quiz-small">
        <p className="correct-answers">
          score : {score} / {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} />
          <div className="btn-container">
            {answers &&
              answers.map((item, index) => (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{__html: item}}
                />
              ))}
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </main>
  );
};

export default Quiz;
