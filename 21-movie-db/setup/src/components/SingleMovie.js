import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useGlobalContext} from './context';
import Error from './Error';
import Loader from './Loader';

const SingleMovie = () => {
  const {id} = useParams();
  const [movieId] = useState(id);
  const {getMovie, loading, error, movies} = useGlobalContext();

  const idApi = `&i=${movieId}`;

  useEffect(() => {
    getMovie(idApi);
  }, [id]);

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

// const idApi = `&i=${id}`;
// const [loading, setLoading] = useState(true);
// const [movie, setMovie] = useState('');
// const [error, setError] = useState({show: false, msg: ''});

// const getIdMovie = async () => {
//   setLoading(true);
//   try {
//     const response = await fetch(`${API_ENDPOINT}${idApi}`);
//     const data = await response.json();
//     console.log(data);
//     if (data.Response === 'True') {
//       setMovie(data);
//       setError({show: false, msg: ''});
//     } else {
//       setError({show: true, msg: data.Error});
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };
