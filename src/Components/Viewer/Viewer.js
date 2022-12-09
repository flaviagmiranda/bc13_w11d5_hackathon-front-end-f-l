import React, { useState, useEffect, useContext } from 'react'
import CarouselButton from '../Carousel Button/CarouselButton'
import ImagePosition from '../Image Position/ImagePosition'
import Fact from '../Fact/Fact.js'
import './Viewer.css'
import CatImage from '../CatImage/CatImage'
import { ThemeContext } from '../../Custom Hooks/ThemeContext'

export default function Viewer() {
  const theme = useContext(ThemeContext);

  const [cats, setCats] = useState({}) // will become custom hook that fetches array of all cats from backend
  const [currentCat, setCurrentCat] = useState(0)
  
  useEffect(() => {
    async function getCats() {
      const response = await fetch(`http://localhost:3001/api/cats`);
      const data = await response.json();
      setCats(data.payload);
    }
    getCats();
  }, []);

  const className = 'viewer-' + theme;

  return (
  <main className={className}>
    <div className="carousel" >
      <CarouselButton direction='<' currentCat={currentCat} setCurrentCat={setCurrentCat}/>
      <CatImage cats={cats} currentCat={currentCat}/>
      <CarouselButton direction='>'  currentCat={currentCat} setCurrentCat={setCurrentCat}/>
    </div>
    <ImagePosition />
    <Fact />
  </main>
  )
}
