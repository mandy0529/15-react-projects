import React, {useState, useRef, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showNavbar) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showNavbar]);

  return (
    <nav>
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} alt="logo"></img>
          <button onClick={handleClick} className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul class="links" ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {
          <ul class="social-icons">
            {social.map((item) => {
              const {id, url, icon} = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </nav>
  );
};

export default Navbar;
