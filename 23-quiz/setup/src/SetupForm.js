import React from 'react';
import {useGlobalContext} from './context';

const SetupForm = ({}) => {
  return (
    <main>
      <h1>setup form</h1>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <div className="form-control">
            <input className="form-input" min={1} />
          </div>
          {/* category */}
          <div className="form-control">
            <select className="form-input"></select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <select className="form-input"></select>
          </div>
          <p className="error"></p>

          <button className="submit-btn"></button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
