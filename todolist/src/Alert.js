import React, {useEffect} from 'react';

const Alert = ({text, controlAlert, list}) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      controlAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p>{text}</p>;
};

export default Alert;
