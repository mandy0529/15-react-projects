import React, {useState, useRef, useEffect} from 'react';
import {useGlobalState} from './context';

const Submenu = () => {
  const [col, setCol] = useState('col-2');
  const {
    submenu,
    location,
    text: {page, links},
  } = useGlobalState();

  const container = useRef();
  const {center, bottom} = location;

  useEffect(() => {
    setCol('col-2');
    const subLocation = container.current;
    subLocation.style.top = `${bottom}px`;
    subLocation.style.left = `${center}px`;

    if (links.length === 3) {
      setCol('col-3');
    }
    if (links.length > 3) {
      setCol('col-4');
    }
  }, [location]);
  return (
    <aside
      className={`${submenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
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
