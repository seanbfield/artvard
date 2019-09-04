import React, { useState, useEffect } from 'react';
import {
 fetchAllObjects
}
 from '../api-helper/services'



export default function Home() {
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
   <ul>
    {data.records.map(record => (
     <li key={record.id}>
      <h3>{record.displayname}</h3>
      <a href={record.url} target="_blank" rel="noopener noreferrer">{record.displayname}</a>
     </li>
    ))}
   </ul>

  </>
 )
}
