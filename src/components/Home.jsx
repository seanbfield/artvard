import React, { useState, useEffect } from 'react';
import {
 fetchAllObjects,
 fetchImages
}
 from '../api-helper/services'

 import '../App.css'



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


 useEffect(() => {
  const fetchImg = async () => {
   const result = await fetchImages();
   setData(result);
  };
  fetchImg();
 }, [])


 return (
  <>
   <div className="row">
    <div className="column">
    {data.records.map(record => (
     <div key={record.id}>
      <h4>{record.displayname}</h4>
      <button className="">More info</button>
     </div>
    ))}
    </div>
   </div>
  </>
 )
}
