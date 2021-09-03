import React, {useCallback, useState} from 'react';
import Loading from '../components/Loading';
import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Error from './Error';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState('');

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const {drinks} = await response.json();
      const {
        strDrink: name,
        strCategory: type,
        strAlcoholic: holic,
        strGlass: glass,
        strInstructions: info,
        strDrinkThumb: img,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      console.log('1');
      const gradients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      console.log(gradients);

      const newCocktail = {name, type, holic, glass, info, img, gradients};
      setCocktail(newCocktail);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [id, getData]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <Error />;
  }

  const {name, type, holic, glass, info, img, gradients} = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home{' '}
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span> {name}
          </p>
          <p>
            <span className="drink-data">type : </span>
            {type}
          </p>
          <p>
            <span className="drink-data">holic : </span>
            {holic}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">gradients : </span>
            {gradients &&
              gradients.map((item, index) => {
                return item ? <li key={index}> {item}</li> : null;
              })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
