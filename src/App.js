import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Index from './pages/Index';

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </div>
  );
}
