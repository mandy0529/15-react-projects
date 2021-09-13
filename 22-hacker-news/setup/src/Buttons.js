import React from 'react';
import {useGlobalContext} from './context';

const Buttons = () => {
  const {handlePage, page, numberPage, loading} = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={loading} onClick={() => handlePage('des')}>
        prev
      </button>
      <p>
        {page + 1} of {numberPage}
      </p>
      <button disabled={loading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  );
};

export default Buttons;
