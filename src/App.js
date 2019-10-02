import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import './App.css';


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
