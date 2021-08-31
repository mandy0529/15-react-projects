import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const showSubMenu = (e) => {
    const btnContent = e.target.textContent;
    const btnSize = e.target.getBoundingClientRect();
    const width = (btnSize.left + btnSize.right) / 2;
    const height = btnSize.bottom - 3;
    openSubmenu(btnContent, {width, height});
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={hideSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button onClick={() => openSidebar()} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={showSubMenu} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={showSubMenu} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={showSubMenu} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign</button>
      </div>
    </nav>
  );
};

export default Navbar;
