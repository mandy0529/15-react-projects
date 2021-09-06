import React from 'react';
import {useParams, Link} from 'react-router-dom';
import Error from './Error';
import Loader from './Loader';
import useFetch from './useFetch';

const SingleMovie = () => {
  const {id} = useParams();
  const idApi = `&i=${id}`;
  const {loading, error, movies} = useFetch(idApi);

  if (loading) {
    return <Loader />;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <Error error={error} />
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    );
  }

  const {Title: title, Year: year, Poster: poster, Plot: plot} = movies;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
