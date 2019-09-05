import React from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =
 "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Results = ({ record }) => {
 const artWork = 
  record.baseimageurl === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : record.baseimageurl;
 return (
  <>
   <div>
    <img
     width="200"
     alt={`${record.imageid}`}
     src={artWork}
    />
   </div>
     <h3>{record.displayname}</h3>
  </>
 )
}

export default Results