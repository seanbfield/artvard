import React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import Results from './components/Results'
import Details from './components/Details'
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/details" component={Details} />
        </Switch>
        <Footer />
      </div>
      </>
  );
}

export default App;
