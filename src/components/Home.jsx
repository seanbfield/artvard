import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { fetchAllObjects, fetchImages, searchArt } from '../api-helper/services'
import StackGrid, { transitions, easings } from "react-stack-grid";
import { useSpring, animated } from 'react-spring'

import Header from './Header';


const transition = transitions.scaleDown;

export default function Home() {

  // Hooks
  const [data, setData] = useState({ records: [] });
  const [img, setImageData] = useState({ records: [] })
  const [artWorks, setArtWorks] = useState({ records: [] })



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


  useEffect(() => {
    const fetchArt = async () => {
      const result = await searchArt();
      setArtWorks(result)
    }
    fetchArt()
  }, [])



  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <>
      <Header />

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
          {/* Map All Art */}
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
                <a href={record.url} target="_blank" rel="noopener noreferrer">More Info</a>
              </div>
            </>
          ))}
        </StackGrid>
      </div>
    </>
  </animated.div >
}
