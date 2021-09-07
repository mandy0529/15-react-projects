import React from 'react';
import {useParams, Link} from 'react-router-dom';
import Error from './Error';
import Loader from './Loader';
import useFetchData from './useFetch';

const SingleMovie = () => {
  const {id} = useParams();
  console.log(id);
  const idApi = `&i=${id}`;
  const {loading, error, data} = useFetchData(idApi);

  if (loading) {
    return <Loader />;
  }
  if (!data) {
    return (
      <div className="page-error">
        <Error error={error} />
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    );
  }

  const {Title: title, Year: year, Poster: poster, Plot: plot} = data;

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
