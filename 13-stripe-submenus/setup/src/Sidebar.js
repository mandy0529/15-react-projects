import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {useGlobalState} from './context';
import sublinks from './data';

const Sidebar = () => {
  const {sidebar, closeSidebar} = useGlobalState();
  return (
    <aside
      className={`${sidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const {page, links} = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
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
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
