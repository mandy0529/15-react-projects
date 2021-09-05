import React from 'react';
import {useGlobalContext} from './context';

const Hero = ({login: name, avatar_url: img, html_url: link}) => {
  const {loading, data} = useGlobalContext();
  return (
    <section>
      <h1>pagenation</h1>
      <img src={img} alt={name} width="100px" height="100px" />
      <div>
        <div>{name}</div>
        <a href={link}>{link}</a>
      </div>
    </section>
  );
};

export default Hero;
