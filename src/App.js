import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Results from './components/Results'
import Details from './components/Details'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
