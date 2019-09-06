import React, { useState, useEffect } from 'react';
import { fetchAllObjects, fetchImages } from '../api-helper/services'
import StackGrid, { transitions, easings } from "react-stack-grid";

import Header from './Header';
const transition = transitions.scaleDown;

export default function Home() {

  const [data, setData] = useState({ records: [] });
  const [img, setImageData] = useState({ records: [] })

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
      <Header />
      {/* <div className="container mt-5"> */}
      <div className="image">
        <StackGrid
          monitorImagesLoaded
          columnWidth={200}
          duration={600}
          gutterWidth={15}
          gutterHeight={15}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          {data.records.map(record => (
            <>
              <div key={record.id}>
                <h3>{record.title}</h3>
                <br />
                <img src={record.primaryimageurl} width="200" alt="artist" />
                {record.culture}
                <br />
                {record.period}
                <br />
                {record.medium}
                <br />
                {record.yearmade}
                <a href={record.url} target="_blank">More Info</a>
              </div>
            </>
          ))}
        </StackGrid>
      </div>
    </>
  )
}
