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
      <a href={record.url} target="_blank">{record.displayname}</a>
     </li>
    ))}
   </ul>

  </>
 )
}
