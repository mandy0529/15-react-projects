import React from 'react';

import {useGlobalContext} from './context';
import Loader from './Loader';

const Stories = () => {
  const {loading, news, removeStory} = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="stories">
      {news.map((item) => {
        const {objectID: id, title, num_comments, url, points, author} = item;
        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                raed more
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
