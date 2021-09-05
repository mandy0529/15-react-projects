import React from 'react';
import {useGlobalContext} from './components/context';
import Hero from './components/Hero';
import Loader from './components/Loader';

function App() {
  const {loading} = useGlobalContext();
  return (
    <section>
      <div>{loading ? <Loader /> : <Hero />}</div>
      <footer>{}</footer>
    </section>
  );
}

export default App;
