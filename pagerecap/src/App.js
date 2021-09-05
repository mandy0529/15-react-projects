import React from 'react';
import {useGlobalContext} from './context';
import PagePerPage from './PagePerPage';

function App() {
  const {loading} = useGlobalContext();
  return (
    <>
      <div className="section-title">
        <h1>{loading ? '...loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <footer>{!loading && <PagePerPage />}</footer>
    </>
  );
}

export default App;
