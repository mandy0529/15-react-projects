import React from 'react';
import logo from './logo.svg';
import {FaTimes} from 'react-icons/fa';
import {social, links} from './data';
import {useGlobalContext} from './AppContext';

const Sidebar = () => {
  const {sidebar, closeSidebar} = useGlobalContext();
  return (
    <aside className={`sidebar ${sidebar && 'show-sidebar'} `}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((item) => {
          const {id, url, text, icon} = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const {id, url, text, icon} = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
