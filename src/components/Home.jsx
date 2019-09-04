import React, { useState, useEffect } from 'react';
import {
 fetchAllObjects,
 fetchImages
}
 from '../api-helper/services'
import { async } from 'q';



export default function Home() {
 const [data, setData] = useState({
  records: [],


 });

 useEffect(() => {
  const fetchData = async () => {
   const result = await fetchAllObjects();
   setData(result);
  };
  fetchData();
 }, [])


 useEffect(() => {
  const fetchImg = async () => {
   const result = await fetchImages();
   setData(result);
  };
  fetchImg();
 }, [])


 return (
  <>
   <ul>
    {data.records.map(record => (
     <li key={record.id}>
      
      <h3>{record.displayname}</h3>
      <img src={record.baseimageurl} alt="..." />
      <a href={record.url} target="_blank" rel="noopener noreferrer">{record.displayname}</a>
     </li>
    ))}
   </ul>

  </>
 )
}
