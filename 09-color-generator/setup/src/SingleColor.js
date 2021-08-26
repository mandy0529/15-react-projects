import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({weight, rgb, index, hex}) => {
  const bcg = rgb.join(',');

  const changeColor = () => {
    const color = `${index > 12 ? '#fff' : ''}`;
    return color;
  };

  return (
    <>
      <article className="color" style={{backgroundColor: `rgb(${bcg})`}}>
        <p style={{color: changeColor()}} className="percent-value">
          {' '}
          {weight}%
        </p>
        <p style={{color: changeColor()}} className="color-value">
          #{hex}
        </p>
      </article>
    </>
  );
};

export default SingleColor;
