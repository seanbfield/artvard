import React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import Results from './components/Results'
import Details from './components/Details'


function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </>
  );
}

export default App;
