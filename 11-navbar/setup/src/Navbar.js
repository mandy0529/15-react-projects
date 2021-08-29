import React, {useState, useRef, useEffect} from 'react';
import {FaBars, FaTwitter, FaYoutube, FaFacebook} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} alt="logo"></img>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div class="links-container show-container">
          <ul class="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
          </ul>
        </div>
        <ul class="social-icons">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
