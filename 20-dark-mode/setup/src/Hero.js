import React, {useState, useEffect} from 'react';
import Article from './Article';
import data from './data';

const CONTROL = 'theme';

const getLocalStorage = () => {
  let LIGHT = true;
  const theme = localStorage.getItem(CONTROL);
  if (theme) {
    return JSON.parse(theme);
  }
  return LIGHT;
};

const Hero = () => {
  const [theme, setTheme] = useState(getLocalStorage);
  const [btn, setBtn] = useState(' change to dark');

  const setLocalStorage = () => {
    localStorage.setItem(CONTROL, JSON.stringify(theme));
  };

  useEffect(() => {
    document.documentElement.className = theme ? 'light-theme' : 'dark-theme';
    setBtn(theme ? 'change to dark' : 'change to light');
    setLocalStorage();
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button onClick={() => setTheme(!theme)} className="btn">
            {btn}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Hero;
