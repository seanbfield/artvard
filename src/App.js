import React, { useState, useEffect } from 'react';
import {
  fetchAllObjects,
  fetchImages
}
from './api-helper/services'
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import Results from './components/Results'
import Details from './components/Details'
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const [data, setData] = useState({
    records: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllObjects();
      setData(result);
    };
    fetchData();
  }, [])


  return (
    <>
        <Header />
      <div className="home-bg">
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
