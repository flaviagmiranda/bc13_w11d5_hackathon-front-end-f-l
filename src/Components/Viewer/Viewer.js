import React, { useState, useEffect, useContext } from 'react'
import CarouselButton from '../Carousel Button/CarouselButton'
//import ImagePosition from '../Image Position/ImagePosition'
//import Fact from '../Fact/Fact.js'
import './Viewer.css'
import CatImage from '../CatImage/CatImage'
import useClassNameConstructor from '../../Custom Hooks/useClassNameConstructor'

export default function Viewer() {
  const [cats, setCats] = useState([]) // will become custom hook that fetches array of all cat ids from backend
  const [currentCat, setCurrentCat] = useState(0)

  const className = useClassNameConstructor("viewer")
  
  useEffect(() => {
    async function getCats() {
      const response = await fetch(`https://cat-app-back-end.onrender.com/api/cats`);
      const data = await response.json();
      setCats(data.payload);
    }
    getCats();
  }, []);

  return (
  <main className={className}>
    <div className="carousel" >
      <CarouselButton direction='<' currentCat={currentCat} setCurrentCat={setCurrentCat} cats={cats} />
      <CatImage cats={cats} currentCat={currentCat}/>
      <CarouselButton direction='>'  currentCat={currentCat} setCurrentCat={setCurrentCat}/>
    </div>
    {/* <ImagePosition />
    <Fact /> */}
  </main>
  )
}
