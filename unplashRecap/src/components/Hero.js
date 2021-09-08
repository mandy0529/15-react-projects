import React, {useEffect} from 'react';
import {useGlobalContext} from './context';
import Error from './Error';
import Loader from './Loader';
import Photo from './Photo';
import ScreenMode from './ScreenMode';

const Hero = () => {
  const {loading, data, searchLoading, searchData} = useGlobalContext();
  console.log('data:', data, 'searchData:', searchData, '히어로에서 데이터');
  if (loading || searchLoading) {
    return <Loader />;
  }
  if (!data || !searchData) {
    return <Error />;
  }

  return (
    <section className="photos">
      <div className="photos-center">
        {searchData &&
          searchData.map((item) => {
            return <Photo key={item.id} {...item} />;
          })}
        {data &&
          data.map((item) => {
            return <Photo key={item.id} {...item} />;
          })}
      </div>
      <ScreenMode />
    </section>
  );
};

export default Hero;
