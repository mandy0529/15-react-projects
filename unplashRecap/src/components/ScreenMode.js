import React, {useEffect, useState} from 'react';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

const CONTROL = 'theme';

const getLocalStorage = () => {
  let LIGHT = true;
  const theme = localStorage.getItem(CONTROL);
  if (theme) {
    return JSON.parse(theme);
  }
  return LIGHT;
};

const ScreenMode = () => {
  const [theme, setTheme] = useState(getLocalStorage);
  const [btn, setBtn] = useState(<FaRegLightbulb />);

  const setLocalStorage = () => {
    localStorage.setItem(CONTROL, JSON.stringify(theme));
  };

  useEffect(() => {
    document.documentElement.className = theme ? 'light-theme' : 'dark-theme';
    setBtn(theme ? <FaLightbulb /> : <FaRegLightbulb />);
    setLocalStorage();
  }, [theme]);

  return (
    <main>
      <button onClick={() => setTheme(!theme)} className="mode">
        {btn}
      </button>
    </main>
  );
};

export default ScreenMode;
