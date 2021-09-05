import React from 'react';

const Home = ({login: name, avatar_url: img, html_url: link}) => {
  return (
    <section className="home">
      <div className="person">
        <img src={img} alt={name} width="200px" height="200px" />
        <div className="person-name">{name}</div>
        <a href={link} className="person-link">
          {link}
        </a>
      </div>
    </section>
  );
};

export default Home;
