import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {useGlobalState} from './context';

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalState();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const menuSize = e.target.getBoundingClientRect();
    const center = (menuSize.left + menuSize.right) / 2;
    const bottom = menuSize.bottom - 3;
    openSubmenu(page, {center, bottom});
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
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
