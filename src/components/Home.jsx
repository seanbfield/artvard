import React, { useState, useEffect } from 'react';
import {
 fetchAllObjects,
 fetchImages
}
 from '../api-helper/services'
import { async } from 'q';



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
  <div>
    {data.records.map(record => (
     <div key={record.id}>
      <h3>{record.displayname}</h3>
     </div>
    ))}
   </div>
  </>
 )
}
