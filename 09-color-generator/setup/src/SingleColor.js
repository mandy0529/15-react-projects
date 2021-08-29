import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({weight, rgb, index, hex}) => {
  const bcg = rgb.join(',');
  const [alert, setAlert] = useState(false);

  const changeColor = () => {
    const color = `${index > 10 ? '#fff' : ''}`;
    return color;
  };

  const handleCopyClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hex}`);
  };
  useEffect(() => {
    let time = setTimeout(() => setAlert(false), 2000);
    return () => clearTimeout(time);
  }, [alert]);
  return (
    <>
      <article
        className="color"
        style={{backgroundColor: `rgb(${bcg})`}}
        onClick={handleCopyClick}
      >
        <p style={{color: changeColor()}} className="percent-value">
          {' '}
          {weight}%
        </p>
        <p style={{color: changeColor()}} className="color-value">
          #{hex}
        </p>
        {
          <p className={alert ? '.alert' : 'hover-alert'}>
            {alert ? 'COPIED ON CLIPBOARD!' : 'click to copy'}
          </p>
        }
      </article>
    </>
  );
};

export default SingleColor;
