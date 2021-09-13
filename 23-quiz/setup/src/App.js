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
  console.log(questions);
  return <Quiz {...questions[index]} />;
}

export default App;
