import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ReadPage from './pages/ReadPage';

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/read" component={ReadPage} />
      </Switch>
    </div>
  );
}
