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
  const [data, setData] = useState({
    records: []
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllObjects();
      setData(result);
    };
    fetchData();
  },[])
  


  return (
    <>

    <ul>
        {data.records.map(record => (
        <li key={record.id}>
            <a href={record.url}>{record.displayname}</a>
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
