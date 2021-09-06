import React from 'react';

const Error = ({error}) => {
  return <div className="error">{error.msg}</div>;
};

export default Error;
