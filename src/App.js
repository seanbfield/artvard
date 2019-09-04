import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import {
  fetchAllObjects
}
from './api-helper/services'
import Home from './components/Home'
import Results from './components/Results'
import Details from './components/Details'


function App() {
  const [data, setData] = useState({ hits: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllObjects();
      setData(result.data);
    };
    fetchData();
  },[])
  


  return (
    <>

    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <p>{item.person}</p>
        </li>
      ))}
    </ul>



    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/details" component={Details} />
      </Switch>
      </div>
      </>
  );
}

export default App;
