import React, {useState, useRef, useEffect} from 'react';
import {useGlobalContext} from './context';

const Submenu = () => {
  const {
    submenu,
    location,
    content: {page, links},
  } = useGlobalContext();

  const container = useRef();
  const {width, height} = location;
  const [col, setCol] = useState('col-2');

  useEffect(() => {
    setCol('col-2');
    const subMenu = container.current;
    subMenu.style.top = `${height}px`;
    subMenu.style.left = `${width}px`;
    if (links.length === 3) {
      setCol('col-3');
    }
    if (links.length > 3) {
      setCol('col-4');
    }
  }, [location]);
  return (
    <aside
      ref={container}
      className={`${submenu ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${col} `}>
        {links.map((item, index) => {
          const {label, icon, url} = item;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
