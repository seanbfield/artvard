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
       <p>{record.title}</p>
       <br />
       {record.culture}
       <br />
       {record.period}
       <br />
       {record.medium}
       <br />
       {record.yearmade}
       <img src={record.primaryimageurl} width="200" alt="artist" />
      <a href={record.url} target="_blank">More Info</a>
     </div>
     </>
    ))}
   </div>
  </>
 )
}
