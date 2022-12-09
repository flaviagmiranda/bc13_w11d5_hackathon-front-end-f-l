import React, { useState, useEffect } from 'react'
import CarouselButton from '../Carousel Button/CarouselButton'
import ImagePosition from '../Image Position/ImagePosition'
import Fact from '../Fact/Fact.js'
import './Viewer.css'
import CatImage from '../CatImage/CatImage'

export default function Viewer() {

  const [cats, setCats] = useState({}) // will become custom hook that fetches array of all cats from backend
  // currentCat, setCurrentCat
  
  useEffect(() => {
    async function getCats() {
      const response = await fetch(`http://localhost:3001/api/cats`);
      const data = await response.json();
      setCats(data.payload);
      console.log(data)
    }
    getCats();
  }, []);

  return (
  <main>
    <div className='carousel'>
      <CarouselButton direction='left'/>
      <CatImage cats={cats}/>
      <CarouselButton direction='right' />
    </div>
    <ImagePosition />
    <Fact />
  </main>
  )
}
