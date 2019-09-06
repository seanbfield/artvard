import React, { useState, useEffect } from 'react';
import {
 fetchAllObjects,
 fetchImages
}
 from '../api-helper/services'



export default function Home() {
 const [data, setData] = useState({ records: [] });
 
 const [img, setImageData] = useState({ records: []})



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
   setImageData(result);
  };
  fetchImg();
 }, [])





 return (
  <>
   <div>
    {data.records.map(record => (
    <>
     <div key={record.id}>
      <p>{record.displayname}</p>
      {img.records.map(record => (
       <div key={record.id}>
      <img src={record.baseimageurl} width="200" alt="artist" />
      </div>
      ))}
      <a href={record.url} target="_blank">More Info</a>
     </div>
     </>
    ))}
   </div>
  </>
 )
}
