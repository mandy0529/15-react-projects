import React from 'react';
import {useGlobalContext} from './context';
import Error from './Error';
import Loader from './Loader';
import Photo from './Photo';
import ScreenMode from './ScreenMode';

const Hero = () => {
  const {loading, data} = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  if (data.length === 0) {
    return <Error />;
  }
  return (
    <section className="photos">
      <div className="photos-center">
        {data.map((item) => (
          <Photo key={item.id} {...item} />
        ))}
      </div>
      <ScreenMode />
    </section>
  );
};

export default Hero;
