import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Movie from './SingleMovie';

const ControlRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </Router>
  );
};

export default ControlRouter;
