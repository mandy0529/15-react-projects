import React from 'react';
import {useGlobalContext} from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';

import Quiz from './Quiz';

function App() {
  const {waiting, loading, index, questions} = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (waiting) {
    return <SetupForm {...questions} />;
  }
  console.log(questions, '퀘스쳔');
  return <Quiz {...questions[index]} />;
}

export default App;
