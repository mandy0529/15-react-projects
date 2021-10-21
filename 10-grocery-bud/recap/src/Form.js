import React, {useRef} from 'react';
import {useGlobalContext} from './Context';

const Form = () => {
  const inputRef = useRef('');
  const {value, handleSubmit} = useGlobalContext();

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="write a list to buy" type="text" />
        <input type="submit" value="submit"></input>
      </form>
    </main>
  );
};

export default Form;
