import React, {useEffect} from 'react';
import {useGlobalStyle} from './context';

const Photo = ({
  urls: {regular: url},
  alt_description: description,
  likes,
  user: {
    username: name,
    portfolio_url: portfolio,
    profile_image: {medium: profile},
  },
}) => {
  const {loading} = useGlobalStyle();

  return (
    <article className="photo">
      <img src={url} alt={name} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={portfolio}>
          <img className="user-img" src={profile} alt={name} />
        </a>
      </div>
    </article>
  );
};

export default Photo;
