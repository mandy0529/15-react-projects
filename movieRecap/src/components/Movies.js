import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from './context';
import Error from './Error';
import Loader from './Loader';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const {loading, data, error} = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  if (!data) {
    return <Error error={error} />;
  }
  return (
    <section className="movies">
      {data.map((movie) => {
        const {imdbID: id, Poster: poster, Title: title, Year} = movie;
        return (
          <Link to={`/movie/${id}`} key={id} className="movie">
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
