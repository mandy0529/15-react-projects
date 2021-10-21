import React from 'react';
import {useGlobalContext} from './context';
import Quiz from './Quiz';
import SetupForm from './SetupForm';
import Loading from './Loading';

function App() {
  const {loading, waiting, questions, index} = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (waiting) {
    return <SetupForm />;
  }
  return {questions};
}

export default App;
