import React, { useState, useEffect, useContext } from 'react'
//import Fact from '../Fact/Fact.js'
import './Viewer.css'
import useClassNameConstructor from '../../Custom Hooks/useClassNameConstructor'
import CatCarousel from '../CatCarousel/CatCarousel'

export default function Viewer() {
  const [cats, setCats] = useState([])
  const [facts, setFacts] = useState([])

  const className = useClassNameConstructor("viewer")
  
  useEffect(() => {
    async function getCats() {
      const response = await fetch(`https://cat-app-back-end.onrender.com/api/cats`);
      const data = await response.json();
      setCats(data.payload);
    }
    getCats();
  }, []);

  useEffect(() => {
    async function getCatFacts() {
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=5`);
      const data = await response.json();
      console.log(data)
      setFacts(data.data);
    }
    getCatFacts();
  }, []);

  return (
  <main className={className}>
    <CatCarousel cats={cats} facts={facts} />
    
    {/* <ImagePosition />
    <Fact /> */}
  </main>
  )
}
