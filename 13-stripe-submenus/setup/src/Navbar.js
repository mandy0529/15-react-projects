import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {useGlobalState} from './context';

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalState();
  return (
    <nav class="nav">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} alt="stripe" class="nav-logo" />
          <button class="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul class="nav-links">
          <li>
            <button className="link-btn">products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">programming</button>
          </li>
        </ul>
        <button className="btn signin-btn">sign</button>
      </div>
    </nav>
  );
};

export default Navbar;
